class AddIndexToPayment < ActiveRecord::Migration
  def change
    add_index :payments, [:payer_id, :paid_id ], unique: true
  end
end
