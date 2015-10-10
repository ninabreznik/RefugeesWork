require 'roar/json'

module UserRepresenter
  include Roar::JSON
  include Grape::Roar::Representer

  property :id
  property :email,                  if: lambda { |args| profile }
  property :sign_in_count
  property :current_sign_in_at
  property :last_sign_in_at
  property :current_sign_in_ip
  property :last_sign_in_ip
  property :created_at
  property :updated_at
  property :wallet
  property :business_type
  property :tracking_id,            if: lambda { |args| profile }
  property :name
  property :accepted_terms_of_use
  property :city,                   if: lambda { |args| profile }
  property :country,                if: lambda { |args| profile }
end
