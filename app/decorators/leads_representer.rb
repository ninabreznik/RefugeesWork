require 'roar/json'
require 'roar/json/hal'

module LeadsRepresenter
  include Roar::JSON::HAL
  include Grape::Roar::Representer

  collection :entries, extend: LeadRepresenter, as: :leads
end
