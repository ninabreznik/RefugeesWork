class Order < ActiveRecord::Base
  belongs_to :selected, class_name: "Lead"
  belongs_to :selector, class_name: "User"
  validates :selected_id, presence: true
  validates :selector_id, presence: true

  before_save :check_wallet
  after_save :update_wallet_and_payment

  def check_wallet
    @price = 10
    user_id = self.selector_id
    @user = User.find_by_id(user_id)
    @user.wallet >= @price
    return true
    rescue
    return false
  end

  def update_wallet_and_payment
    user_id = self.selector_id
    @user = User.find_by_id(user_id)
    new_payment = @user.payment + @price
    new_wallet_status = @user.wallet - @price
    @user.update_attributes(:payment => new_payment)
    @user.update_attributes(:wallet => new_wallet_status)
  end

end
