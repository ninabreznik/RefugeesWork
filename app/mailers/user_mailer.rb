class UserMailer < ActionMailer::Base
  default from: "we@refugeeswork.com"

  def welcome_email(user, pass=nil)
    @url = 'http://www.refugeeswork.com/en/users/edit'
    @user = user
    @pass = pass
    #@url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to RefugeesWork')
  end

  def notify(lead, users)
    @url = 'http://www.refugeeswork.com/en/users/edit'
    @lead = lead
    @users = users
    @users.each do |user|
      UserMailer.new_lead(user).deliver
    end
    @emails = @users.collect(&:email).join(",")
  end

  def new_lead(user)
    @user = user
    @user_id = user.id
    mail(to: @user.email, subject: 'Welcome to RefugeesWork')
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
