class LeadsController < ApplicationController

  def index
    @leads = Lead.all
    @sorted_leads = @leads.sort.reverse
    @user = current_user
  end

  def show
    @lead = Lead.find_by_id(params[:id])
  end

  def new
    session[:lead_params] ||= {}
    @lead = Lead.new(session[:lead_params])
    @lead.current_step = session[:lead_step]
  end

  def create
    session[:lead_params].deep_merge!(lead_params) if (lead_params)
    @lead = Lead.new(session[:lead_params])
    @lead.current_step = session[:lead_step]
    if params[:back_button]
      @lead.previous_step
    elsif @lead.last_step?
      @lead.save
    else
      @lead.next_step
    end
    session[:lead_step] = @lead.current_step
    if @lead.save
      auto_create_user!(@lead)
      session[:lead_step] = session[:lead_params] = nil
      subscribed_users = User.all.where(subscribed_to_notifications: true)
        subscribed_users.each do |user|
      UserMailer.new_lead(@lead, user).deliver
      end
      redirect_to new_lead_confirmation_url
    else
      redirect_to leads_new_url
    end
  end

  private

  def lead_params
    params.require(:lead).permit(
      :name,
      :email,
      :description,
      :zip,
      :phone,
      :business_type,
      :time,
      :location,
      :address,
      :material_supply,
      :property_type,
      :selector_id,
      :selected_id,
      :tracking_link,
      :affiliation_id
    )
  end

  def auto_create_user!(lead)
    if user_signed_in?
      lead.user_id = current_user.id
    else
      user = User.find_by_email(lead.email)
      if user
        lead.user_id = user.id
      else
        pass = SecureRandom.hex[0..7]
        user = User.create!(
                 email: lead.email,
                 password: pass,
                 password_confirmation: pass
               )
        lead.user_id = user.id
        user.leads << lead
        UserMailer.welcome_email(user, pass).deliver
      end
    end
    lead.save
  end


  def current_lead
    current_lead=(lead)
    @current_lead = lead
  end

end
