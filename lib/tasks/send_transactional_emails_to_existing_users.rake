namespace :users do
  desc "Send transactional emails to users already in database"
  task :transactional_email_to_existing_users => :environment do
    User.all.tap{|users| puts "Found #{users.size} users to work on"}.each do |user|
      if user.accepted_terms_of_use == true && user.tracking_id != nil
        UserMailer.affiliation_code(user).deliver 
      elsif user.accepted_terms_of_use == true && user.tracking_id == nil
        UserMailer.terms_of_use(user).deliver
      elsif user.accepted_terms_of_use != true && user.tracking_id != nil
        UserMailer.affiliation_code(user).deliver 
      elsif user.accepted_terms_of_use != true && user.tracking_id == nil
        UserMailer.welcome_email(user).deliver 
      end   
    end
  end
end

