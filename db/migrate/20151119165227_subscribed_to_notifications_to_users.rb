class SubscribedToNotificationsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :subscribed_to_notifications, :boolean, default: true
  end
end
