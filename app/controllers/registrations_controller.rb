class RegistrationsController < Devise::RegistrationsController

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
