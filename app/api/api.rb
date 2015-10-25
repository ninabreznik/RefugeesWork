require 'grape-swagger'

class API < Grape::API
  version 'v1', using: :path
  format :json

  mount API::V1::Auth
  mount API::V1::Leads
  mount API::V1::Users
  add_swagger_documentation mount_path: 'doc.json'
end
