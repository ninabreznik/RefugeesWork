class API::V1::Users < Grape::API
  include API::V1::Shared

  resources :users do


    params do
      requires :auth_token, type: String, desc: "User authentication token"
    end
    desc "Returns data of User associated to the authentication token"
    get :me do
      authenticate!
      present current_user, with: ::API::V1::Entities::User, profile: true
    end

    desc "Returns list of Orders from User associated to the authentication token"
    get 'me/orders' do
      authenticate!
      present current_user.orders, with: ::API::V1::Entities::Order
    end

    desc "Returns list of Lead created by User associated to the authentication token"
    get 'me/leads' do
      authenticate!
      present current_user.leads, with: ::API::V1::Entities::Lead
    end

    desc "Returns list of Lead selected by User associated to the authentication token"
    get 'me/selected_leads' do
      authenticate!
      present current_user.selected_leads, with: ::API::V1::Entities::Lead
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
      present user, with: ::API::V1::Entities::User, profile: true
    end

    desc "Update the User with authentication token."
    params do
      requires :auth_token, type: String, desc: "User authentication token"
      group :user, type: Hash, desc: 'User data' do
        requires :email,                   type: String, desc: ''
        requires :name,                    type: String, desc: ''
        requires :business_type,           type: String, desc: ''
        requires :accepted_terms_of_use,   type: Boolean, desc: ''
        requires :city,                    type: String, desc: ''
        requires :country,                 type: String, desc: ''

        optional :password,                type: String, desc: ''
        optional :wallet,                  type: Integer, desc: ''
        optional :tracking_id,             type: String, desc: ''
      end
    end
    put :me do
      authenticate!
      current_user.update! permitted_params['user']
      present current_user, with: ::API::V1::Entities::User, profile: true
    end
  end

  helpers do
    def permitted_params
      declared(params).to_hash
    end
  end
end
