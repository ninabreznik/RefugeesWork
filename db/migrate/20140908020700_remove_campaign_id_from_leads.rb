class RemoveCampaignIdFromLeads < ActiveRecord::Migration
  def change
    remove_column :leads, :campaign_id, :integer
  end
end
