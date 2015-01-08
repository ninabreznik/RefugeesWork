class AddBusinessTypeToUser < ActiveRecord::Migration
  def change
    add_column :users, :business_type, :string
  end
end
