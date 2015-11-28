class API::V1::Users < Grape::API
  include API::V1::Shared

  resources :users do

    desc "Returns data of user associated to the authentication token"
    params do
      requires :auth_token, type: String, desc: "User authentication token"
    end
    get :me do
      authenticate!
      present current_user, with: ::API::V1::Entities::User, profile: true
    end

    desc "Create a User"
    params do
      group :user, type: Hash, desc: 'User data' do
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
    end
    post do
      user = User.create! permitted_params[:user]
      present user, with: ::API::V1::Entities::User
    end

    desc "Update the User, user must match authentication token."
    params do
      requires :id, type: String, desc: "User ID"
      requires :auth_token, type: String, desc: "User authentication token"
      group :user, type: Hash, desc: 'User data' do
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
    end
    put ':id' do
      authenticate!
      user = User.find(params['id'])
      error!('403 Forbidden', 403) unless current_user == user
      user.update! permitted_params['user']
      present user, with: ::API::V1::Entities::User
    end
  end

  helpers do
    def permitted_params
      declared(params).to_hash
    end
  end
end
