class API::Leads < Grape::API
  include API::Shared

  format :json
  formatter :json, Grape::Formatter::Roar

  desc "Returns all public leads"
  get '/me' do
    present Lead.all, with: UserRepresenter, profile: true
  end

  desc "Return user by id"
  get ':id' do
    present User.find(params[:id]), with: UserRepresenter, profile: true
  end

end
