class AddTrackingLinkToLeads < ActiveRecord::Migration
  def change
    add_column :leads, :tracking_link, :string
  end
end
