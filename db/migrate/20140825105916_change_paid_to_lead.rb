class ChangePaidToLead < ActiveRecord::Migration
  def change
    remove_column :leads, :paid, :boolean
    add_column :leads, :paid, :boolean, default: false
  end
end
