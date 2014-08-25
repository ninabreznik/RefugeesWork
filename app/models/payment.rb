class Payment < ActiveRecord::Base 
  belongs_to :paid, class_name: "Lead"
  belongs_to :payer, class_name: "User"
  
  validates :paid_id, presence: true
  validates :payer_id, presence: true
end
