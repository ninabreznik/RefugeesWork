class UserMailer < ActionMailer::Base
  default from: "we@refugeeswork.com"

  def welcome_email(user, pass=nil)
    @user = user
    @pass = pass
    #@url  = 'http://example.com/login'
    mail(to: @user.email, subject: 'Welcome to RefugeesWork')
  end

  def self.new_lead(lead)
    @lead = lead
    lead_business_type = lead.business_type
    @right_users = User.all.where(subscribed_to_notifications: true)
    if @right_users
      @right_users.each do |right_user|
        new_lead(right_user, lead).deliver  # SEND new_lead.html.erb to the right users
    end
  end

def new_lead(right_user, lead)
  @lead_description = lead.description
  mail(to: right_user.email, subject: 'New job')
end

  def new_order(order)
    @order = order
    @lead = @order.selected
    @user = @order.selector
    mail(to: @user.email, subject: 'Check your address book')
  end

end
