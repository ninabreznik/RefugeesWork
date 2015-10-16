require 'roar/json'

module LeadRepresenter
  include Roar::JSON
  include Grape::Roar::Representer

  property :id
  property :name
  property :email,            if: lambda { |args| args[:authenticated] }
  property :description
  property :created_at
  property :updated_at
  property :zip,              if: lambda { |args| args[:authenticated] }
  property :phone,            if: lambda { |args| args[:authenticated] }
  property :business_type
  property :time
  property :location
  property :address,          if: lambda { |args| args[:authenticated] }
  property :user_id
  property :tracking_link
  property :affiliation_id
end
