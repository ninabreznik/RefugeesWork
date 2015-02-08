class UserMailer < ActionMailer::Base
  default from: "nina.breznik@sosed.si"
 
  def welcome_email(user, pass=nil)
    @user = user
    @pass = pass
    #@url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Dobrodošli na LeadShareApp')
  end

  # def new_campaign(campaign)
  #   @user = user
  #   #@url  = 'http://example.com/login'
  #   mail(to: @user.email, subject: 'New campaign')
  # end

end