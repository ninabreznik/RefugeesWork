class LeadsController < ApplicationController

  def index
    @leads = Lead.all
    @sorted_leads = @leads.sort.reverse
    @user = current_user
    @count_for_baden = @leads.where(address: "Germany - Baden-Württemberg").count
    @count_for_bavaria  = @leads.where(address: "Germany - Bavaria").count
    @count_for_berlin  = @leads.where(address: "Germany - Berlin").count
    @count_for_brandenburg  = @leads.where(address: "Germany - Brandenburg").count
    @count_for_bremen  = @leads.where(address: "Germany - Bremen").count
    @count_for_hamburg  = @leads.where(address: "Germany - Hamburg").count
    @count_for_hesse  = @leads.where(address: "Germany - Hesse").count
    @count_for_lowersaxony  = @leads.where(address: "Germany - Lower Saxony").count
    @count_for_mecklenburg  = @leads.where(address: "Germany - Mecklenburg-Vorpommern").count
    @count_for_northrhine  = @leads.where(address: "Germany - North Rhine-Westphalia").count
    @count_for_rhineland  = @leads.where(address: "Germany - Rhineland-Palatinate").count
    @count_for_saarland = @leads.where(address: "Germany - Saarland").count
    @count_for_saxony = @leads.where(address: "Germany - Saxony").count
    @count_for_s_anhalt = @leads.where(address: "Germany - Saxony-Anhalt").count
    @count_for_schleswig = @leads.where(address: "Germany - Schleswig-Holstein").count
    @count_for_greece = @leads.where(address: "Greece").count
    @count_for_turkey = @leads.where(address: "Turkey").count
    @count_for_egypt = @leads.where(address: "Egypt").count
    @count_for_jordan = @leads.where(address: "Jordan").count
    @count_for_lebanon = @leads.where(address: "Lebanon").count
    @count_for_sweden = @leads.where(address: "Sweden").count
    @count_for_norway = @leads.where(address: "Norway").count
    @count_for_findland = @leads.where(address: "Findland").count
    @count_for_austria = @leads.where(address: "Austria").count
    @count_for_switzerland = @leads.where(address: "Switzerland").count
    @count_for_france = @leads.where(address: "France").count
    @count_for_uk = @leads.where(address: "United Kingdom").count
    @count_for_other = @leads.where(address: "Other").count
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
