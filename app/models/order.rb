class Order < ActiveRecord::Base
  belongs_to :selected, class_name: "Lead"
  belongs_to :selector, class_name: "User"
  validates :selected_id, presence: true
  validates :selector_id, presence: true

  #before_create :assign_package_and_payment

  # def assign_package_and_payment
  #   if params[:order][:package]) == "solo"
  #     self.package = "solo"
  #   elsif params[:order][:package]) == "shared"
  #     self.package = "shared"
  #   end
  #   if params[:order][:payment]) == "PayPal"
  #     self.payment = "PayPal"
  #   elsif params[:order][:package]) == "bank"
  #     self.payment = "bank"
  #   end
end
