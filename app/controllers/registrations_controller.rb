class RegistrationsController < Devise::RegistrationsController

after_filter :store_location

  def create
    super()
    user = User.last
    if user.created_at > Time.now - 3.seconds
      UserMailer.welcome_email(user).deliver
    end
  end

  def store_location
    session[:previous_url] = request.fullpath unless request.fullpath =~ /\/users/
  end

  def after_sign_up_path_for(resource)
    edit_user_registration_path(resource)
  end

  def after_sign_in_path_for(resource)
    session[:previous_url] || edit_user_registration_path(resource)
  end

  private

  def sign_up_params
    params.require(:user).permit(
      :name,
      :business_type,
      :surname,
      :service,
      :de_service,
      :company,
      :tax_id,
      :website,
      :phone,
      :city,
      :hourly_rate,
      :bio,
      :de_bio,
      :picture,
      :email,
      :country,
      :subscribed_to_notifications,
      :password,
      :password_confirmation,
      :current_password)
  end

  def account_update_params
    params.require(:user).permit(
      :name,
      :surname,
      :business_type,
      :city,
      :country,
      :service,
      :de_service,
      :company,
      :tax_id,
      :website,
      :phone,
      :hourly_rate,
      :bio,
      :de_bio,
      :picture,
      :subscribed_to_notifications,
      :email,
      :password,
      :password_confirmation,
      :current_password)
  end

  protected

  def update_resource(resource, params)
    resource.update_without_password(params)
  end

end
