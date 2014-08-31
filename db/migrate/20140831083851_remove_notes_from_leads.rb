class RemoveNotesFromLeads < ActiveRecord::Migration
  def change
    remove_column :leads, :notes, :text
  end
end
