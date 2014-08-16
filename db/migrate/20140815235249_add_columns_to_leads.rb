class AddColumnsToLeads < ActiveRecord::Migration
  def change
    add_column :leads, :zip, :integer
    add_column :leads, :phone, :string
    add_column :leads, :business_type, :string
    add_column :leads, :time, :string
  end
end
