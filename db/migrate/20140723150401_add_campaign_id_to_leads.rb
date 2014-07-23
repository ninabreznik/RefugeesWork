class AddCampaignIdToLeads < ActiveRecord::Migration
  def change
    add_column :leads, :campaign_id, :integer
  end
end
