class AddPaidToLead < ActiveRecord::Migration
  def change
    add_column :leads, :paid, :boolean
  end
end
