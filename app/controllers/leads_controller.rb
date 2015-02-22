class LeadsController < ApplicationController
  
  def index
    @leads = Lead.all
    @lead = Lead.find_by_id(params[:id])
    @user = current_user
    @sorted_leads = @leads.sort.reverse
  end

  def show
    @lead = Lead.find_by_id(params[:id])
    @leads = Lead.all
    # @reserved_leads = @lead.reverse_orders.where(selector_id: current_user.id)

    #@order = @lead.reverse_orders.where(selector_id: current_user.id)
  end

  def new
    session[:lead_params] ||= {}
    @lead = Lead.new(session[:lead_params])
    @lead.current_step = session[:lead_step]

    render 'new', layout: 'adwords_layout'
  end


  def share
    session[:lead_params] ||= {}
    @lead = Lead.new(session[:lead_params])
    @lead.current_step = session[:lead_step]


    # render 'share', layout: 'adwords_layout'
  end

  def create
    session[:lead_params].deep_merge!(lead_params) if (lead_params)
    @lead = Lead.new(session[:lead_params])
    @lead.current_step = session[:lead_step]
    if params[:back_button]
      @lead.previous_step
    elsif @lead.last_step?
        check_tracking_link(@lead)
        @lead.save 
    else
      @lead.next_step
    end
    session[:lead_step] = @lead.current_step
    if @lead.save
      # auto_create_user!(@lead)
      session[:lead_step] = session[:lead_params] = nil
      redirect_to new_lead_confirmation_url
      User.all.each do |user|
        UserMailer.new_lead(@lead, user).deliver 
      end
    else 
      redirect_to leads_new_url
    end
  end 


  def update
      @lead = Lead.find(params[:id])
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

  # def auto_create_user!(lead)
  #   if user_signed_in?
  #     lead.user_id = current_user.id
  #   else
  #     user = User.find_by_email(lead.email)
  #     if user
  #       lead.user_id = user.id
  #     else
  #       pass = SecureRandom.hex[0..7]
  #       user = User.create!(
  #                email: lead.email, 
  #                password: pass, 
  #                password_confirmation: pass
  #              )
  #       lead.user_id = user.id
  #       user.leads << lead
  #       UserMailer.welcome_email(user, pass).deliver 
  #     end
  #   end
  #   lead.save
  # end

  def check_tracking_link(lead)
    if lead.tracking_link.include?("=")
        lead.tracking_link = lead.tracking_link.split('=').second
      end
  end

  def current_lead
    current_lead=(lead)
    @current_lead = lead
  end

end