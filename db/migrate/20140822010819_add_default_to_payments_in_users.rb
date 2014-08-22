class AddDefaultToPaymentsInUsers < ActiveRecord::Migration
  def change
    remove_column :users, :payments, :integer
    add_column :users, :payment, :integer, default: 0
  end
end
