class RegistrationsController < Devise::RegistrationsController

  private

  def sign_up_params
    params.require(:user).permit(
      :first_name,
      :surname,
      :business_type,
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
      :password,
      :password_confirmation,
      :current_password)
  end

  def account_update_params
    params.require(:user).permit(
      :first_name,
      :surname,
      :business_type,
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
      :password,
      :password_confirmation,
      :current_password)
  end

  protected

  def update_resource(resource, params)
    resource.update_without_password(params)
  end

end
