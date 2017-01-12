class UserMailer < ActionMailer::Base
  default from: "we@refugeeswork.com"

  def welcome_email(user, pass=nil)
    @user = user
    @pass = pass
    #@url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to RefugeesWork')
  end

  def new_lead(lead)
    @lead = lead
    @right_users = User.all.where(subscribed_to_notifications:true)
    emails = @right_users.collect(&:email).join(",")
    mail(:to => emails, :subject => "New job")
  end

  # def new_lead(right_user)
  #   mail(to: right_user.email, subject: 'New job')
  # end

  def new_order(order)
    @order = order
    @lead = @order.selected
    @user = @order.selector
    mail(to: @user.email, subject: 'Check your address book')
  end

end
