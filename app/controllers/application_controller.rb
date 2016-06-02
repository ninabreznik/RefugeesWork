class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

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
