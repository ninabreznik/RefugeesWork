class AddColumnsToPayment < ActiveRecord::Migration
  def change
    add_column :payments, :paid_id, :integer
    add_column :payments, :payer_id, :integer
  end
end
