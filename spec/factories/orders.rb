# == Schema Information
#
# Table name: orders
#
#  id          :integer          not null, primary key
#  selector_id :integer
#  selected_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#  paid        :boolean          default(FALSE)
#  notes       :text
#

FactoryGirl.define do
  factory :order do
    association :selector, factory: :user
    association :selected, factory: :lead
  end
end
