# Simple Role Syntax
# ==================
# Supports bulk-adding hosts to roles, the primary server in each group
# is considered to be the first unless any hosts have the primary
# property set.  Don't declare `role :all`, it's a meta role.

# role :app, %w{deploy@example.com}
# role :web, %w{deploy@example.com}
# role :db,  %w{deploy@example.com}


# Extended Server Syntax
# ======================
# This can be used to drop a more detailed server definition into the
# server list. The second argument is a, or duck-types, Hash and is
# used to set extended properties on the server.

#server '5.39.51.100', user: 'ninabreznik', roles: %w{web app db}, :primary => true
set :domain, '5.39.51.100'
# set :app, domain
# set :web, domain
# set :db, domain, :primary => true

set :rails_env, :production
set :deploy_to, "/opt/#{application}"
set :branch, "production"

set :bundle_without, [:development, :test]

set :default_environment, {
   'PATH' => "$HOME/.rbenv/shims:$HOME/.rbenv/bin:$PATH",
   'TDSVER' => "7.1"
}


#####################################################################
######################## Set Defaults ###############################
#####################################################################

######## deploy:setup ###########
#################################

set_default(:user) { 'ninabreznik' }

set_default(:thin_address) { "0.0.0.0" }
set_default(:thin_port) { 3000 }
set_default(:thin_servers) { 4 }

set_default(:database_host) { 'localhost' }
set_default(:database_adapter) { 'sqlite3' }
# set_default(:database_name) { 'minimal_production' }
set_default(:database_pool) { 5 }

set_default(:app_root) { "#{deploy_to}/current" }
set_default(:initd_script_target) { "/etc/init.d" }

set :mailer_config do
 {
     "#{rails_env}" => {
         raise_delivery_errors: true,
         default_url_options: {
             host: defined?(mailer_host) ? mailer_host : "5.39.51.100"
         },
         delivery_method: :smtp,
         smtp_settings: {
             address: defined?(smtp_address) ? smtp_address : "smtp.mandrillapp.com",
             port: defined?(smtp_port) ? smtp_port : 587,
             user_name: "ninabreznik@gmail.com",
             password: ""
         }
     }
 }
end


# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult[net/ssh documentation](http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start).
#
# Global options
# --------------
#  set :ssh_options, {
#    keys: %w(/home/rlisowski/.ssh/id_rsa),
#    forward_agent: false,
#    auth_methods: %w(password)
#  }
#
# And/or per server (overrides global)
# ------------------------------------
# server 'example.com',
#   user: 'user_name',
#   roles: %w{web app},
#   ssh_options: {
#     user: 'user_name', # overrides user setting above
#     keys: %w(/home/user_name/.ssh/id_rsa),
#     forward_agent: false,
#     auth_methods: %w(publickey password)
#     # password: 'please use keys'
#   }

# set :stage, :production

# set :deploy_to, '/opt/leadshareapp' 

# set :branch, 'master'

# set :rails_env, 'production'

# # Simple Role Syntax
# # ==================
# # Supports bulk-adding hosts to roles, the primary
# # server in each group is considered to be the first
# # unless any hosts have the primary property set.
# role :app, %w{ninabreznik@5.39.51.100}
# role :web, %w{ninabreznik@5.39.51.100}
# role :db,  %w{ninabreznik@5.39.51.100}
