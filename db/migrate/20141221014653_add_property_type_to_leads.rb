class AddPropertyTypeToLeads < ActiveRecord::Migration
  def change
    add_column :leads, :property_type, :string
  end
end
