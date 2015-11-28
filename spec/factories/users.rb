# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#  wallet                 :integer          default(0)
#  business_type          :string(255)
#  tracking_id            :string(255)
#  name                   :string(255)
#  accepted_terms_of_use  :boolean
#  city                   :string(255)
#  country                :string(255)
#

FactoryGirl.define do
  factory :user do
    name                  { Faker::Internet.user_name }
    email                 { Faker::Internet.email }
    password              { Faker::Internet.password }
    password_confirmation { password }

    city                  { Faker::Address.country }
    country               { Faker::Address.city }
  end

  trait :with_api_key do
    association :api_key
  end
end
