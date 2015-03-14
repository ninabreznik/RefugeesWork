class AddAffiliationAgreementToUsers < ActiveRecord::Migration
  def change
    add_column :users, :affiliation_agreement, :boolean
  end
end
