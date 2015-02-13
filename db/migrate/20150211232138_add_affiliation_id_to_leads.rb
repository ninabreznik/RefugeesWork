class AddAffiliationIdToLeads < ActiveRecord::Migration
  def change
    add_column :leads, :affiliation_id, :string
  end
end
