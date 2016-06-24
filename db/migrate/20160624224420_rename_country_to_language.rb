class RenameCountryToLanguage < ActiveRecord::Migration
  def change
    rename_column :users, :country, :languages
  end
end
