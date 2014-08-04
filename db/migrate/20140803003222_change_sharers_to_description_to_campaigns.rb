class ChangeSharersToDescriptionToCampaigns < ActiveRecord::Migration
  def change 
    remove_column :campaigns, :sharers, :integer
    add_column :campaigns, :description, :text
  end
end
