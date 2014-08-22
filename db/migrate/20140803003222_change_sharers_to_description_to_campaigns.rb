class ChangeSharersToDescriptionToCampaigns < ActiveRecord::Migration
  def change 
    remove_column :orders, :payment, :string
    add_column :orders, :payment, :integer
  end
end
