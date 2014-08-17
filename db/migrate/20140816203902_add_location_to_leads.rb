class AddLocationToLeads < ActiveRecord::Migration
  def change
    add_column :leads, :location, :string
  end
end
