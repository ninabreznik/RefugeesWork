namespace :mailer do
  desc "Generate the mailer.yml configuration file."
  task :setup, roles: [:app] do
    set_default(:mailer_config) { {delivery_method: smtp } }
    run "mkdir -p #{shared_path}/config"
    template "mailer.yml.erb", "#{shared_path}/config/mailer.yml"
  end
  after "deploy:setup", "mailer:setup"

  desc "Symlink the mailer.yml file into latest release"
  task :symlink, roles: [:app] do
    run "ln -nfs #{shared_path}/config/mailer.yml #{release_path}/config/mailer.yml"
  end
  after "deploy:finalize_update", "mailer:symlink"
end
