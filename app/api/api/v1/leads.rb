class API::V1::Leads < Grape::API
  include API::V1::Shared

  resources :leads do

    desc "Returns all leads"
    params do
      requires :auth_token, type: String, desc: "User authentication token"
    end
    get do
      authenticate!
      present Lead.order(updated_at: :desc).all, with: ::API::V1::Entities::Lead, authenticated: true
    end

    desc "Returns all leads without private data"
    get :public do
      present Lead.order(updated_at: :desc).all, with: ::API::V1::Entities::Lead, authenticated: false
    end


    params do
      requires :auth_token, type: String, desc: "User authentication token"
      requires :id, type: Integer, desc: "Lead ID"
    end
    route_param :id do
      desc "Return Lead by id"
      get do
        authenticate!
        lead = Lead.where(id: params['id']).first
        error!('404 Not found', 404) unless lead
        present lead, with: ::API::V1::Entities::Lead, authenticated: true
      end

      desc "Returns Orders of Lead"
      get :orders do
        authenticate!
        lead = Lead.where(id: params['id']).first
        error!('404 Not found', 404) unless lead
        present lead.reverse_orders, with: ::API::V1::Entities::Order
      end
    end

    desc "Create new Lead"
    params do
      #requires :auth_token, type: String, desc: "User authentication token"

      group :lead, type: Hash, desc: 'Lead data' do
        requires :business_type, type: String, desc: "Title of the lead"
        requires :address, type: String, desc: "Address"
        requires :description, type: String, desc: "Description of the lead, can be multiline. Plain text"
        requires :time, type: String, desc: "Time or Time range of the lead"
        requires :name, type: String, desc: "Name of the lead's author"
        requires :email, type: String, desc: "E-mail of the lead's author"

        optional :zip, type: String, desc: "Zipcode where the lead is located"
        optional :phone, type: String, desc: "Phone number of the lead's author"
        optional :location, type: String, desc: "Location of the lead"
        optional :affiliation_id, type: String, desc: "Affiliation ID"
      end
    end
    post do
      puts "post"
      #authenticate!
      lead = Lead.create permitted_params['lead']
      present lead, with: ::API::V1::Entities::Lead, authenticated: true
    end

    desc "Update existing Lead"
    params do
      requires :auth_token, type: String, desc: "User authentication token"

      group :lead, type: Hash, desc: 'Lead data' do
        requires :business_type, type: String, desc: "Title of the lead"
        requires :address, type: String, desc: "Address"
        requires :description, type: String, desc: "Description of the lead, can be multiline. Plain text"
        requires :time, type: String, desc: "Time or Time range of the lead"
        requires :name, type: String, desc: "Name of the lead's author"
        requires :email, type: String, desc: "E-mail of the lead's author"

        optional :zip, type: String, desc: "Zipcode where the lead is located"
        optional :phone, type: String, desc: "Phone number of the lead's author"
        optional :location, type: String, desc: "Location of the lead"
        optional :affiliation_id, type: String, desc: "Affiliation ID"
      end
    end
    route_param :id do
      put do
        authenticate!
        lead = Lead.where(id: params['id']).first
        error!('404 Not found', 404) unless lead
        error!('403 Forbidden', 403) unless current_user == lead.user

        lead.update!(permitted_params['lead'])
        present lead, with: ::API::V1::Entities::Lead, authenticated: true
      end
    end
  end

  helpers do
    def permitted_params
      declared(params, include_missing: false).to_hash
    end
  end
end
