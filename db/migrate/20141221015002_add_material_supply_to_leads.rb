class AddMaterialSupplyToLeads < ActiveRecord::Migration
  def change
    add_column :leads, :material_supply, :string
  end
end
