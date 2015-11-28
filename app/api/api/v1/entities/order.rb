require 'roar/json'

module API::V1::Entities
  class Order < Grape::Entity
    expose :id
    expose :created_at
    expose :updated_at
    expose :paid
    expose :notes

    expose :selected, using: API::V1::Entities::Lead
    expose :selector, using: API::V1::Entities::User
  end
end
