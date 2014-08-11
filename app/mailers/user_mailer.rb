class UserMailer < ActionMailer::Base
  default from: "nina.breznik@sosed.si"
 
  def welcome_email(user)
    @user = user
    #@url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to Sosed App')
  end

  # def new_campaign(campaign)
  #   @user = user
  #   #@url  = 'http://example.com/login'
  #   mail(to: @user.email, subject: 'New campaign')
  # end

end
