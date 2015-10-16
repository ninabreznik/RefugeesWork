require 'grape-swagger'

class API < Grape::API
  version 'v1', using: :path
  format :json

  mount V1::Auth
  mount V1::Leads
  mount V1::Users
  add_swagger_documentation
end
