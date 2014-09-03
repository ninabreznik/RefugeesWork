class AddOrderIdToPaypalNotifications < ActiveRecord::Migration
  def change
    add_column :paypal_notifications, :order_id, :integer
  end
end
