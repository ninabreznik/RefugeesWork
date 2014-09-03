class PaypalNotification < ActiveRecord::Base
belongs_to :order
serialize :params
after_save :mark_order_as_paid

private

  def mark_order_as_paid
    if self.status == "Completed"
      @order = Order.find_by_id(self.cart_id)
      @order.update_attributes(:paid => true)
    end
  end
end
