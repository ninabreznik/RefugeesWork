# == Schema Information
#
# Table name: leads
#
#  id             :integer          not null, primary key
#  name           :string(255)
#  email          :string(255)
#  description    :text
#  created_at     :datetime
#  updated_at     :datetime
#  zip            :integer
#  phone          :string(255)
#  business_type  :string(255)
#  time           :string(255)
#  location       :string(255)
#  address        :string(255)
#  user_id        :integer
#  tracking_link  :string(255)
#  affiliation_id :string(255)
#

FactoryGirl.define do
  factory :lead do
    time                    { 4.days.ago }
    name                    { Faker::Name.name }
    email                   { Faker::Internet.email }
    business_type           { Faker::Lorem.sentence }
    address                 { Faker::Address.street_address }
    description             { Faker::Lorem.paragraph }
  end
end
