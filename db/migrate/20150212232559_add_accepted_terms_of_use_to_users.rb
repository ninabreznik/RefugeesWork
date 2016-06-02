class AddAcceptedTermsOfUseToUsers < ActiveRecord::Migration
  def change
    add_column :users, :accepted_terms_of_use, :boolean
  end
end
