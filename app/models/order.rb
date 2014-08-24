class Order < ActiveRecord::Base
  
  belongs_to :selected, class_name: "Lead"
  belongs_to :selector, class_name: "User"
  
  validates :selected_id, presence: true
  validates :selector_id, presence: true
  
  #before_save :check_wallet
  #after_save :update_wallet

  # def check_wallet
  #   @price = 10
  #   user_id = self.selector_id
  #   @user = User.find_by_id(user_id)
  #   @user.wallet >= @price
  #   return true
  # rescue
  #   return false
  # end

  # def update_wallet
  #   if @user.wallet >= 10
  #     new_payment = @user.payment + 1
  #     new_wallet_status = @user.wallet - @price
  #     @user.update_attributes(:wallet => new_wallet_status)
  #     @user.update_attributes(:payment => new_payment)
  #   redirect_to :action => 'index'
  #   end
  # end

end
