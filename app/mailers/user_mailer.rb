class UserMailer < ActionMailer::Base
  default from: "we@refugeeswork.com"

  def welcome_email(user, pass=nil)
    @user = user
    @pass = pass
    #@url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to RefugeesWork')
  end

  def terms_of_use(user)
    @user = user
    mail(to: @user.email, subject: 'Uspešno ste potrdili dogovor o sodelovanju')
  end

  def affiliation_agreement(user)
    @user = user
    @tracking_id = @user.tracking_id
    #@url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Uspešno ste potrdili dogovor o afiliaciji')
  end

  def affiliation_code(user)
    @user = user
    @user_tracking_id = @user.tracking_id
    @user_tracking_link = leads_new_path(id: @user_tracking_id)
    mail(to: @user.email, subject: 'Uspešno ste ustvarili afiliacijsko kodo')
  end

  def new_lead(lead, user)
    @lead = lead
    @user = user
    mail(to: @user.email, subject: 'New post')
  end

  def new_order(order)
    @order = order
    @lead = @order.selected
    @user = @order.selector
    mail(to: @user.email, subject: 'Check your address book')
  end

end
