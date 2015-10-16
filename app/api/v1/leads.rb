class V1::Leads < Grape::API
  include V1::Shared

  formatter :json, Grape::Formatter::Roar

  resources :leads do

    desc "Returns all leads"
    get '/' do
      authenticate!
      Lead.order(updated_at: :desc).all.extend(LeadsRepresenter).to_hash authenticated: true
    end

    desc "Returns all public leads"
    get '/public' do
      Lead.order(updated_at: :desc).all.extend(LeadsRepresenter).to_hash authenticated: false
    end

    desc "Return leads by id"
    get ':id' do
      authenticate!
      Lead.find(params[:id]).extend(LeadRepresenter).to_hash authenticated: false
    end

    desc "Create new lead"
    put '/' do
      authenticate!
      Lead.create(params[:id]).extend(LeadRepresenter).to_hash
    end
  end
end
