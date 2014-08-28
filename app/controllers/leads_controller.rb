class LeadsController < ApplicationController
  
  def index
    @leads = Lead.all
    @lead = Lead.find_by_id(params[:id])
    @user = current_user
  end

  def show
    @lead = Lead.find_by_id(params[:id])
   # @order_for_this_lead_from_current_user = @lead.reverse_orders.where(selector_id: current_user.id)
  end

  def new
    @lead = Lead.new
    @business_types = [
      ["Painting", "Painting"], 
      ["Fasades", "Fasades"], 
      ["Renovations", "Renovations"],
      ["Mechanical Installations", "Mechanical Installations"],
      ["Electrical Installations", "Electrical Installations"], 
      ["Knauf", "Knauf"],
      ["Ceramics", "Ceramics"], 
      ["Parquet", "Parquet"], 
      ["Roofing", "Roofing"], 
      ["Masonry", "Masonry"]
    ]
    @time = [
      ["As soon as possible"], 
      ["In the next 14 days"], 
      ["In 1-3 months"], 
      ["Flexible"]
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
    redirect_to @lead
  end 


  def update
      @lead = Lead.find(params[:id])
    if @lead.valid?
      @lead.update_attributes(lead_params)
      redirect_to @lead
    else
      render 'edit'
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
      :selector_id,
      :selected_id,
      :payer_id,
      :paid_id,
      :notes,
      :paid
    )
  end

  def current_lead
    current_lead=(lead)
    @current_lead = lead
  end

end
