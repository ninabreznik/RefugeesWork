class CreatePaypalNotifications < ActiveRecord::Migration
  def change
    create_table :paypal_notifications do |t|
      t.text :params
      t.string :status
      t.string :transaction_id
      t.integer :cart_id

      t.timestamps
    end
  end
end
