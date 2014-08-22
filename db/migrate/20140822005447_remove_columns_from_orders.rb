class RemoveColumnsFromOrders < ActiveRecord::Migration
  def change
    remove_column :orders, :payment, :integer
    remove_column :orders, :package, :string
  end
end
