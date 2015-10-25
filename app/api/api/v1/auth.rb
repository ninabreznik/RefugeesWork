class API::V1::Auth < Grape::API
  include API::V1::Shared

  resource :auth do

    desc "Creates and returns access_token if valid login"
    params do
      requires :login, type: String, desc: "Username or email address"
      requires :password, type: String, desc: "Password"
    end
    post :login do

      user = User.find_by_email(params[:login].downcase)

      if user && user.authenticate(params[:password])
        key = ApiKey.create(user_id: user.id)
        { auth_token: key.access_token }
      else
        error!('Unauthorized.', 401)
      end
    end

    desc "Returns pong if logged in correctly"
    params do
      requires :auth_token, type: String, desc: "Authentication token."
    end
    get :ping do
      authenticate!
      { message: "pong" }
    end
  end
  end
