working_directory "/opt/leadshareapp/current"
pid "/opt/leadshareapp/current/tmp/pids/unicorn.pid"
stderr_path "/opt/leadshareapp/shared/log/unicorn.log"
stdout_path "/opt/leadshareapp/shared/log/unicorn.log"

listen "/tmp/unicorn.leadshareapp.sock", :backlog => 64
listen 3334, :tcp_nopush => true

worker_processes "6".to_i
timeout 30

preload_app true

before_exec do |server|
 ENV["BUNDLE_GEMFILE"] = "/opt/leadshareapp/current/Gemfile"
end

before_fork do |server, worker|
 # Disconnect since the database connection will not carry over
 if defined? ActiveRecord::Base
   ActiveRecord::Base.connection.disconnect!
 end

 # Quit the old unicorn process
 old_pid = "#{server.config[:pid]}.oldbin"
 if old_pid != server.pid
   begin
     sig = (worker.nr + 1) >= server.worker_processes ? :QUIT : :TTOU
     Process.kill(sig, File.read(old_pid).to_i)
   rescue Errno::ENOENT, Errno::ESRCH
   end
 end
 #
 # Throttle the master from forking too quickly by sleeping.  Due
 # to the implementation of standard Unix signal handlers, this
 # helps (but does not completely) prevent identical, repeated signals
 # from being lost when the receiving process is busy.
 sleep 1
end

after_fork do |server, worker|
 # Start up the database connection again in the worker
 if defined?(ActiveRecord::Base)
   ActiveRecord::Base.establish_connection
 end
end