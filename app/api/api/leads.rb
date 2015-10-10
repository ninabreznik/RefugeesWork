class API::Leads < Grape::API
  include API::Shared

  format :json
  formatter :json, Grape::Formatter::Roar

  desc "Returns all leads"
  get '/' do
    present Lead.all, with: LeadsRepresenter, authenticated: true
  end

  desc "Returns all public leads"
  get '/public' do
    present Lead.all, with: LeadsRepresenter, authenticated: false
  end

  desc "Return leads by id"
  get ':id' do
    present Lead.find(params[:id]), with: LeadRepresenter, authenticated: false
  end

end
