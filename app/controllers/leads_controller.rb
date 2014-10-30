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
    @lead = Lead.new

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

  end

  def create
    @lead = Lead.create(
      :name           => params[:lead][:name], 
      :email          => params[:lead][:email], 
      :description    => params[:lead][:description], 
      :zip            => params[:lead][:zip], 
      :phone          => params[:lead][:phone], 
      :business_type  => params[:lead][:business_type], 
      :time           => params[:lead][:time], 
      :location       => params[:lead][:location]
    )
    redirect_to new_lead_confirmation_url
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
