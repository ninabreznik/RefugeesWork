class AddUserIdToLead < ActiveRecord::Migration
  def change
    add_column :leads, :user_id, :integer
  end
end
