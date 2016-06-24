class RenameBusinessTypeToBio < ActiveRecord::Migration
  def change
    rename_column :users, :business_type, :bio
  end
end
