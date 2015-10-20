require 'roar/json'

module V1::Entities
  class Lead < Grape::Entity
    expose :id
    expose :name
    expose :description
    expose :created_at
    expose :updated_at
    expose :business_type
    expose :time
    expose :location
    expose :user_id
    expose :tracking_link
    expose :affiliation_id
    expose :email, :address, :zip, :phone, if: lambda { |object, options| options[:authenticated] }
  end
end
