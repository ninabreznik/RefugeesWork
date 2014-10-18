namespace :database do

  set_default(:database_host) { 'localhost' }
  set_default(:database_adapter) { 'mysql2' }
  set_default(:database_encoding) { 'utf8' }
  #set_default(:database_name) { 'oyster_dev' }
  set_default(:database_pool) { 5 }

  desc "Generate the database.yml configuration file."
  task :setup, roles: [:app, :db] do

    run "mkdir -p #{shared_path}/config"

    set_default(:database_user) { Capistrano::CLI.ui.ask("Type is your database username: ") }
    set_default(:database_password) { Capistrano::CLI.password_prompt("Type your database password for user #{database_user}: ") }

    template "database.yml.erb", "#{shared_path}/config/database.yml"
  end
  after "deploy:setup", "database:setup"

  desc "Symlink the database.yml file into latest release"
  task :symlink, roles: [:app, :db] do
    run "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml"
  end
  after "deploy:finalize_update", "database:symlink"

  desc "Reset the database"
  task :reset, roles: [:app, :db] do
    run "cd #{current_path} && bundle exec rake db:reset RAILS_ENV=#{rails_env}"
  end

end
