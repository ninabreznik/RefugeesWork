require 'roar/json'

module API::V1::Entity
  class User < Grape::Entity
    expose :id
    expose :sign_in_count
    expose :current_sign_in_at
    expose :last_sign_in_at
    expose :current_sign_in_ip
    expose :last_sign_in_ip
    expose :created_at
    expose :updated_at
    expose :wallet
    expose :business_type
    expose :email, :tracking_id, :city, :country, if: lambda { |object, options| options[:profile] }
    expose :name
    expose :accepted_terms_of_use
  end
end
