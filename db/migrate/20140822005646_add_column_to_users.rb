class AddColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :payments, :integer
  end
end
