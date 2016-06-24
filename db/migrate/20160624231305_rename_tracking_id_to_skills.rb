class RenameTrackingIdToSkills < ActiveRecord::Migration
  def change
    rename_column :users, :tracking_id, :skills
  end
end
