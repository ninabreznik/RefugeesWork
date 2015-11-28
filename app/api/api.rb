require 'grape-swagger'

class API < Grape::API
  version 'v1', using: :path
  format :json
  prefix 'api'

  mount API::V1::Auth
  mount API::V1::Leads
  mount API::V1::Orders
  mount API::V1::Users

  add_swagger_documentation  api_version: self.version
end
