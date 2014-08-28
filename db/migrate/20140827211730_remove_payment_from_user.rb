class RemovePaymentFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :payment, :integer
  end
end
