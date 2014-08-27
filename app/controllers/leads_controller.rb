class LeadsController < ApplicationController
  def index
    @leads = Lead.all
    @lead = Lead.find_by_id(params[:id])
    @user = current_user
    if user_signed_in?

# #############################################################################
#  For showing buttons buy for only leads customer hasn't bought yet
# #############################################################################
        current_user.orders.count > 0
           @selected_ids_of_current_users_orders = []
           current_user.orders.each do |o|
             @selected_ids_of_current_users_orders << o.selected_id
            end
        # else
        #   @selected_ids_of_current_users_orders = [-999] #dirty hack
        # end
# #############################################################################
#  For showing Lead was bought, find it in bought_leads
# ############################################################################# 
      # if user_signed_in?
      #   current_users_payments = Payment.where(payer_id: current_user.id)
      #   current_users_payments_ids = []
      #   current_users_payments.each do |p|
      #     current_users_payments_ids << p.paid_id
      #   end
      #   @bought_leads = Lead.where(id: current_users_payments_ids)
      #   @bought_leads_ids = []
      #   @bought_leads.each do |l|
      #     @bought_leads_ids << l.id
      #   end
      #     @is_lead_bought = @bought_leads_ids.include?(@lead.id)
      # else
      # @is_lead_bought = []
      # end


# #############################################################################
#  For showing number of orders for certain lead
# #############################################################################      
      @number_of_orders_for_lead 

    end
  end

  def show
    @lead = Lead.find_by_id(params[:id])
    @user = current_user
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
  
  def edit
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






  def sold_out_leads

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
