source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.1.0'

gem 'rails_12factor', group: :production
ruby '2.1.2'
# Use sqlite3 as the database for Active Record
group :production do
  gem 'pg'
end

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

gem 'turbolinks'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer',  platforms: :ruby

##############################
#### DUAL SIDE TEMPLATING ####
gem "therubyracer"
##############################

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0',          group: :doc

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

gem 'less-rails'
gem 'rspec',           '~> 2.14.0'
gem 'sprockets-rails', '~> 2.0.0'
gem 'railties',        '~> 4.1.0'

gem "font-awesome-rails"

#DEVISE
gem 'devise'

#ACTIVE ADMIN
gem 'activeadmin', github: 'gregbell/active_admin'
gem 'sass-rails', github: 'rails/sass-rails'
gem 'ransack', github: 'activerecord-hackery/ransack'
gem 'formtastic'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

gem 'grape'
gem 'roar'
gem 'grape-roar'
gem 'grape-swagger-rails'

# Use unicorn as the app server

# Use Capistrano for deployment
group :development do
  gem 'annotate', require: false
  gem 'capistrano-rails'
  gem 'capistrano-bundler'
  gem 'capistrano-rbenv'
  gem 'capistrano3-unicorn'
  gem 'sqlite3', '1.3.9'
  gem 'grape-raketasks'
  gem 'better_errors'
  gem 'quiet_assets'
end

#Dashing related stuff
  gem 'puma'
# gem 'nokogiri'
# gem 'htmlentities'


# Use debugger
# gem 'debugger', group: [:development, :test]
