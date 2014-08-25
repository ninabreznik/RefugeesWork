class LeadsController < ApplicationController
  def index
    @leads = Lead.all
    @campaign = Campaign.find_by_id(params[:id])
    @lead = Lead.find_by_id(params[:id])
    @user = User.find_by_id(params[:id])
    if user_signed_in?
# #############################################################################
#  Show only filtered Leads (from Campaigns you follow)
# #############################################################################
      coowned_ids = []
      current_user.relationships.each do |r|
        coowned_ids << r.coowned_id
      end
      current_user_campaigns = Campaign.where(id: coowned_ids)
      current_user_campaigns_locations_and_title = []
      current_user_campaigns.each do |c|
        current_user_campaigns_locations_and_title << [c.location, c.title]
      end
      @current_user_leads = []
      @leads.each do |l|
        current_user_lead_locations_and_business_type = [l.location,l.business_type]
        current_user_campaigns_locations_and_title.each do |c|
          if c == current_user_lead_locations_and_business_type
            @current_user_leads << l
          end
        end
      end
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
#  For showing number of orders for certain lead
# #############################################################################      
      @number_of_orders_for_lead 
    end
  end

  def show
    @lead = Lead.find_by_id(params[:id])
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
    @user = current_user
      @old_paid = @lead.paid
      @lead.update_attributes(lead_params)
    # ########################################################################### 
    # Check if @lead.paid was updated 
    # and then change @user.wallet and @user.payment
    # ###########################################################################
      @new_paid = @lead.paid
      @price = 10
      if @old_paid != @new_paid
        new_payment = @user.payment + @price
        new_wallet_status = @user.wallet - @price
        @user.update_attributes(:payment => new_payment)
        @user.update_attributes(:wallet => new_wallet_status)
      end
    # ###########################################################################
    # Code to show bought leads
    # ###########################################################################
    if user_signed_in?
      current_users_orders = Order.where(selector_id: current_user.id)
      current_users_leads_ids = []
    current_users_orders.each do |o|
        current_users_leads_ids << o.selected_id
    end
      @ordered_leads = Lead.where(id: current_users_leads_ids)
    else
      @ordered_leads = []
    end
    ###
      render 'leads/bought_leads'
  end

  def reserved_leads
    @lead = Lead.find_by_id(params[:id])
    if user_signed_in?
      current_users_orders = Order.where(selector_id: current_user.id)
      current_users_leads_ids = []
      current_users_orders.each do |o|
        current_users_leads_ids << o.selected_id
      end
      @ordered_leads = Lead.where(id: current_users_leads_ids)
    else
      @ordered_leads = []
    end
  end

  def bought_leads
    @lead = Lead.find_by_id(params[:id])
    if user_signed_in?
      @bought_leads = Lead.where(paid:true)
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
      :notes,
      :paid
    )
  end

  def current_lead
    current_lead=(lead)
    @current_lead = lead
  end



end
