class ChangeWalletToUsers < ActiveRecord::Migration
  def change
    remove_column :users, :wallet, :integer
    add_column :users, :wallet, :integer, default: 0
  end
end
