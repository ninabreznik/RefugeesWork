namespace :users do
  desc "Subscribe existing users to notifications"
  task :subscribe_to_notifications => :environment do
    User.all.tap{|users| puts "Found #{users.size} users to work on"}.each do |user|
      user.update(subscribed_to_notifications: true)
    end
  end
end
