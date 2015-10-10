require 'grape-swagger'

module API
  class Root < Grape::API
    mount API::Leads
    add_swagger_documentation
  end
end
