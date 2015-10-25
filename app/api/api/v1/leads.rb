class API::V1::Leads < Grape::API
  include API::V1::Shared

  resources :leads do

    desc "Returns all leads"
    params do
      requires :authtoken, type: String, desc: "User authentication token"
    end
    get do
      authenticate!
      present Lead.order(updated_at: :desc).all, with: ::API::V1::Entities::Lead, authenticated: true
    end

    desc "Returns all leads without private data"
    get :public do
      present Lead.order(updated_at: :desc).all, with: ::API::V1::Entities::Lead, authenticated: false
    end

    desc "Return leads by id"
    params do
      requires :authtoken, type: String, desc: "User authentication token"
      requires :id, type: Integer, desc: "Lead ID"
    end
    route_param :id do
      get do
        authenticate!
        present Lead.find(params[:id]), with: V1::Entities::Lead, authenticated: true
      end
    end

    desc "Create new lead"
    params do
      #requires :authtoken, type: String, desc: "User authentication token"

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
    post do
      authenticate!
      Lead.create({
        business_type:  params[:business_type],
        address:        params[:address],
        description:    params[:description],
        time:           params[:time],
        name:           params[:name],
        email:          params[:email],
        zip:            params[:zip],
        phone:          params[:phone],
        location:       params[:location],
        affiliation_id: params[:affiliation_id]
      })

    end
  end
end
