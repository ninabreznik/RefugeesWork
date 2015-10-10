require File.expand_path('../boot', __FILE__)

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)


module LeadShareApp
  class Application < Rails::Application
    initializer 'setup_asset_pipeline', :group => :all  do |app|
    # We don't want the default of everything that isn't js or css, because it pulls too many things in
    app.config.assets.precompile.shift

    # Explicitly register the extensions we are interested in compiling
        app.config.assets.precompile.push(Proc.new do |path|
        File.extname(path).in? [
        '.html', '.erb', '.haml',                 # Templates
        '.png',  '.gif', '.jpg', '.jpeg',         # Images
        '.eot',  '.otf', '.svc', '.woff', '.ttf', # Fonts
        ]
        end)
    end
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.paths.add File.join('app', 'api'), glob: File.join('**', '*.rb')
    config.autoload_paths += Dir[Rails.root.join('app', 'api', '*')]

    # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
    # Run "rake -D time" for a list of tasks for finding time zone names. Default is UTC.
    # config.time_zone = 'Central Time (US & Canada)'

    # The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.
    # config.i18n.load_path += Dir[Rails.root.join('my', 'locales', '*.{rb,yml}').to_s]
    config.i18n.default_locale = :en

    #config.assets.initialize_on_precompile = false
    config.assets.paths << "{Rails.root}/app/assets/components"
    config.assets.initialize_on_precompile = false
    config.serve_static_assets = true

  end
end
