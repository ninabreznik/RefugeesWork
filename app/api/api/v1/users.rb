class API::V1::Users < Grape::API
  include API::V1::Shared

  resources :users do

    desc "Returns data of user associated to the authentication token"
    params do
      requires :id, type: String, desc: "User ID"
      requires :authtoken, type: String, desc: "User authentication token"
    end
    get :me do
      authenticate!
      present current_user, with: Entities::User, profile: true
    end

    desc "Create a User"
    params do
      requires :email,                   type: String, desc: ''
      requires :password,                type: String, desc: ''
      requires :name,                    type: String, desc: ''
      requires :business_type,           type: String, desc: ''
      requires :accepted_terms_of_use,   type: Boolean, desc: ''
      requires :city,                    type: String, desc: ''
      requires :country,                 type: String, desc: ''
      optional :wallet,                  type: Integer, desc: ''
      optional :tracking_id,             type: String, desc: ''
    end
    post do
      User.create!({
        email:                  params[:email],
        password:               params[:password],
        name:                   params[:name],
        business_type:          params[:business_type],
        accepted_terms_of_use:  params[:accepted_terms_of_use],
        city:                   params[:city],
        country:                params[:country],
        wallet:                 params[:wallet],
        tracking_id:            params[:tracking_id]
      })
    end

    desc "Update the User, user must match authentication token."
    params do
      requires :id, type: String, desc: "User ID"
      requires :authtoken, type: String, desc: "User authentication token"
      requires :email,                   type: String, desc: ''
      requires :password,                type: String, desc: ''
      requires :name,                    type: String, desc: ''
      requires :business_type,           type: String, desc: ''
      requires :accepted_terms_of_use,   type: Boolean, desc: ''
      requires :city,                    type: String, desc: ''
      requires :country,                 type: String, desc: ''
      optional :wallet,                  type: Integer, desc: ''
      optional :tracking_id,             type: String, desc: ''
    end
    put ':id' do
      authenticate!
      user = User.find(params[:id])
      error!('403 Forbidden', 403) if current_user != user
      user.update({
        email:                  params[:email],
        password:               params[:password],
        name:                   params[:name],
        business_type:          params[:business_type],
        accepted_terms_of_use:  params[:accepted_terms_of_use],
        city:                   params[:city],
        country:                params[:country],
        wallet:                 params[:wallet],
        tracking_id:            params[:tracking_id]
      })
    end
  end
end
