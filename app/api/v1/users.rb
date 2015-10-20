class V1::Users < Grape::API
  include V1::Shared

  resources :users do

    desc "Returns data of user associated to the authentication token"
    get '/me' do
      authenticate!
      present current_user, with: Entities::User, profile: true
    end

    #desc "Return user by id"
    #get ':id' do
    #  authenticate!
    #  User.find(params[:id]).extend(UserRepresenter).to_hash profile: false
    #end
  end
end
