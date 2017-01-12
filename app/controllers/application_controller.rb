class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session, :if => Proc.new { |c| c.request.format == 'application/json' }

# after_filter :store_location

# def store_location
#   # store last url - this is needed for post-login redirect to whatever the user last visited.
#   return unless request.get?
#   if (request.path != "/users/sign_in" &&
#       request.path != "/users/sign_up" &&
#       request.path != "/users/password/new" &&
#       request.path != "/users/password/edit" &&
#       request.path != "/users/confirmation" &&
#       request.path != "/users/sign_out" &&
#       !request.xhr?) # don't store ajax calls
#     session[:previous_url] = request.fullpath
#   end
# end
before_action :set_locale

def set_locale
  locale = params[:locale].try(:to_sym)
  locale = I18n.default_locale unless I18n.available_locales.include?(locale)
  I18n.locale = locale
end

def default_url_options(options = {})
  { locale: I18n.locale }.merge(options)
end

def after_sign_in_path_for(resource)
  root_path
end

def after_sign_up_path_for(resource)
  root_path
end

def after_update_path_for(resource)
  root_path
end

def after_cancel_user_registration_path_for(resource)
  root_path
end

end
