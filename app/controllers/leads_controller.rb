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
        if current_user.orders.count > 0
           @selected_ids_of_current_users_orders = []
           current_user.orders.each do |o|
             @selected_ids_of_current_users_orders << o.selected_id
            end
        else
          @selected_ids_of_current_users_orders = [-999] #dirty hack
        end
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
    if @lead.valid?
      @lead.update_attributes(lead_params)
      redirect_to 'leads/my_leads'
    end
  end

  def my_leads
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
    if user_signed_in? 
      if @lead_ids_of_current_users_orders > 0 
        @lead_ids_of_current_users_orders = @selected_ids_of_current_users_orders.uniq!
        @lead_ids_to_display = []
        @lead_ids_of_current_users_orders.each do |x|
          if @selected_ids_of_current_users_orders.count(x) < 5      
            @lead_ids_to_display << x
          end
        end
      @leads_to_display = Lead.where(id:lead_ids_to_display)
      end
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
      :notes
    )
  end

  def current_lead
    current_lead=(lead)
    @current_lead = lead
  end



end
