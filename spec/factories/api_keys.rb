# == Schema Information
#
# Table name: api_keys
#
#  id           :integer          not null, primary key
#  access_token :string(255)      not null
#  user_id      :integer          not null
#  active       :boolean          default(TRUE), not null
#  expires_at   :datetime
#  created_at   :datetime
#  updated_at   :datetime
#


FactoryGirl.define do
  factory :api_key do
    association :user
  end
end
