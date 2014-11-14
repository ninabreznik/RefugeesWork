# require "bundler/capistrano"

# load "config/recipes/database"
# load "config/recipes/mailer"

# set :stages, %w(development production)
# set :default_stage, "development"

# require "capistrano/ext/multistage"

# set_default(:stage) { default_stage.to_sym }

# set :application, "leadshareapp"
# set :deploy_to, "/var/www/#{application}/#{stage}" #TODO: Add to Build Params?

# set :deploy_via, :remote_cache

# set :scm, :git
# set :repository, "https://github.com/ninabreznik/LeadShareApp.git" #TODO: Add to Build Params?
# set :branch, 'master'

# set :server, '5.39.51.100'
# set :use_sudo, false
# set :user, 'ninabreznik'

# default_run_options[:pty] = true
# ssh_options[:forward_agent] = true

# after "deploy", "deploy:cleanup"

# config valid only for Capistrano 3.1
lock '3.2.1'

set :application, 'leadshareapp'
set :repo_url, 'https://github.com/ninabreznik/LeadShareApp.git'
set :rbenv_ruby, '2.1.3'

server '5.39.51.100', user: 'ninabreznik', roles: %w{web app}

# set :linked_files, %w{config/database.yml .env}
set :linked_dirs, %w{tmp/pids db}
# set :linked_files, %w{config/database.yml db/production.sqlite3}

set :unicorn_config_path, "config/unicorn.rb"

# set :rbenv_type, :user # or :system, depends on your rbenv setup
# set :rbenv_prefix, "RAILS_ENV=production RBENV_ROOT=#{fetch(:rbenv_path)} RBENV_VERSION=#{fetch(:rbenv_ruby)} #{fetch(:rbenv_path)}/bin/rbenv exec"
# set :rbenv_map_bins, %w{rake gem bundle ruby rails}
# set :rbenv_roles, :all # default value

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      invoke 'unicorn:restart'
    end
  end

  after :publishing, :restart

  after :restart, :clear_cache do
    on roles(:web), in: :groups, limit: 3, wait: 10 do
      # Here we can do anything such as:
      # within release_path do
      #   execute :rake, 'cache:clear'
      # end
    end
  end

end
