class V1::Leads < Grape::API
  include V1::Shared

  resources :leads do

    desc "Returns all leads"
    get '/' do
      authenticate!
      present Lead.order(updated_at: :desc).all, with: Entities::Lead, authenticated: true
    end

    desc "Returns all public leads"
    get '/public' do
      present Lead.order(updated_at: :desc).all, with: Entities::Lead, authenticated: false
    end

    desc "Return leads by id"
    get ':id' do
      authenticate!
      present Lead.find(params[:id]), with: Entities::Lead, authenticated: true
    end

    desc "Create new lead"
    put '/' do
      authenticate!
      Lead.create(params[:id]).extend(LeadRepresenter).to_hash

    end
  end
end
