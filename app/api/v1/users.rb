class V1::Users < Grape::API
  include V1::Shared

  formatter :json, Grape::Formatter::Roar

  resources :users do

    desc "Returns all public leads"
    get '/me' do
      authenticate!
      current.user.extend(UserRepresenter).to_hash profile: true
    end

    desc "Return user by id"
    get ':id' do
      authenticate!
      User.find(params[:id]).extend(UserRepresenter).to_hash profile: false
    end
  end
end
