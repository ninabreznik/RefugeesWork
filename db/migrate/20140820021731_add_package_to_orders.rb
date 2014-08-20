class AddPackageToOrders < ActiveRecord::Migration
  def change
    add_column :orders, :package, :string
  end
end
