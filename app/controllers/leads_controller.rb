class LeadsController < ApplicationController
  
  def index
    @leads = Lead.all
    @lead = Lead.find_by_id(params[:id])
    @user = current_user
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

    @business_types = [
      ["#{I18n.t'lead-new.form.business-types.painting'}", "#{I18n.t'lead-new.form.business-types.painting'}"], 
      ["#{I18n.t'lead-new.form.business-types.fasades'}", "#{I18n.t'lead-new.form.business-types.fasades'}"], 
      ["#{I18n.t'lead-new.form.business-types.renovations'}", "#{I18n.t'lead-new.form.business-types.renovations'}"],
      ["#{I18n.t'lead-new.form.business-types.mechanical_installations'}", "#{I18n.t'lead-new.form.business-types.mechanical_installations'}"],
      ["#{I18n.t'lead-new.form.business-types.electrical_installations'}", "#{I18n.t'lead-new.form.business-types.electrical_installations'}"], 
      ["#{I18n.t'lead-new.form.business-types.knauf'}", "#{I18n.t'lead-new.form.business-types.knauf'}"],
      ["#{I18n.t'lead-new.form.business-types.ceramics'}", "#{I18n.t'lead-new.form.business-types.ceramics'}"], 
      ["#{I18n.t'lead-new.form.business-types.parquet'}", "#{I18n.t'lead-new.form.business-types.parquet'}"], 
      ["#{I18n.t'lead-new.form.business-types.roofing'}", "#{I18n.t'lead-new.form.business-types.roofing'}"], 
      ["#{I18n.t'lead-new.form.business-types.masonry'}", "#{I18n.t'lead-new.form.business-types.masonry'}"]
    ]

    @time = [
      ["#{I18n.t'lead-new.form.form-time.asap'}"], 
      ["#{I18n.t'lead-new.form.form-time.fourteendays'}"], 
      ["#{I18n.t'lead-new.form.form-time.onetothreemonths'}"], 
      ["#{I18n.t'lead-new.form.form-time.flexible'}"]
    ]
    render 'new', layout: 'adwords_layout'
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
      redirect_to new_lead_confirmation_url
      session[:lead_step] = session[:lead_params] = nil
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
      :selector_id,
      :selected_id,
      :payer_id,
      :paid_id,
      :paid
    )
  end


  def current_lead
    current_lead=(lead)
    @current_lead = lead
  end

end
