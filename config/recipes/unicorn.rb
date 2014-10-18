# set_default(:unicorn_user) { user }
# set_default(:unicorn_pid) { "#{current_path}/tmp/pids/unicorn.pid" }
# set_default(:unicorn_config) { "#{shared_path}/config/unicorn.rb" }
# set_default(:unicorn_log) { "#{shared_path}/log/unicorn.log" }
# set_default(:unicorn_listen) { 3333 }
# set_default(:unicorn_workers, 6)
# set_default(:unicorn_script_name) { "oyster-unicorn" }
# set(:unicorn_command) { "#{initd_script_target}/#{unicorn_script_name}" }


# namespace :unicorn do
#   desc "Setup Unicorn initializer and app configuration"
#   task :setup, roles: :app do
#     run "mkdir -p #{shared_path}/config"
#     template "unicorn.rb.erb", unicorn_config
#     template "unicorn_init.erb", "/tmp/unicorn_init"
#     run "chmod +x /tmp/unicorn_init"
#     run "#{sudo} mv /tmp/unicorn_init #{unicorn_command}"
#     # run "#{sudo} update-rc.d -f unicorn_#{application}_#{stage} defaults"
#   end
#   after "deploy:setup", "unicorn:setup"

#   desc "Symlink the unicorn.rb file into latest release"
#   task :symlink, roles: [:app, :queueing, :migration] do
#     run "ln -nfs #{shared_path}/config/unicorn.rb #{release_path}/config/unicorn.rb"
#   end
#   after "deploy:finalize_update", "unicorn:symlink"

#   %w[start stop restart].each do |command|
#     desc "#{command} unicorn"
#     task command, roles: :app do
#       run "#{unicorn_command} #{command}"
#     end
#     after "deploy:#{command}", "unicorn:#{command}"
#   end
# end

# Set environment to development unless something else is specified
env = ENV["RAILS_ENV"] || "development"


# Production specific settings
if env == "production"
  app_dir = "leadshareapp"
  worker_processes 4
end

# listen on both a Unix domain socket and a TCP port,
# we use a shorter backlog for quicker failover when busy
listen "/tmp/unicorn.#{app_dir}.socket", :backlog => 64

# Preload our app for more speed
preload_app true

# nuke workers after 30 seconds instead of 60 seconds (the default)
timeout 30

# Help ensure your application will always spawn in the symlinked
# "current" directory that Capistrano sets up.
working_directory "/home/deploy/apps/#{app_dir}/current"

# feel free to point this anywhere accessible on the filesystem
user 'deploy', 'deploy'
shared_path = "/home/deploy/apps/#{app_dir}/shared"

stderr_path "#{shared_path}/log/unicorn.stderr.log"
stdout_path "#{shared_path}/log/unicorn.stdout.log"

pid "#{shared_path}/tmp/pids/unicorn.pid"


before_fork do |server, worker|
  # the following is highly recomended for Rails + "preload_app true"
  # as there's no need for the master process to hold a connection
  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.connection.disconnect!
  end

  # Before forking, kill the master process that belongs to the .oldbin PID.
  # This enables 0 downtime deploys.
  old_pid = "#{shared_path}/pids/unicorn.pid.oldbin"
  if File.exists?(old_pid) && server.pid != old_pid
    begin
      Process.kill("QUIT", File.read(old_pid).to_i)
    rescue Errno::ENOENT, Errno::ESRCH
      # someone else did our job for us
    end
  end
end

after_fork do |server, worker|
  # the following is *required* for Rails + "preload_app true",
  if defined?(ActiveRecord::Base)
    ActiveRecord::Base.establish_connection
  end
end