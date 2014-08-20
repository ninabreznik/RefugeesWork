class Order < ActiveRecord::Base
  belongs_to :selected, class_name: "Lead"
  belongs_to :selector, class_name: "User"
  validates :selected_id, presence: true
  validates :selector_id, presence: true
end
