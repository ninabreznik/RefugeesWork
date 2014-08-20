class LeadsController < ApplicationController
  def index
    @leads = Lead.all
    @campaign = Campaign.find_by_id(params[:id])
    @lead = Lead.find_by_id(params[:id])
    if user_signed_in?
      #checking which relationships exist for current user (which campaigns he applied for) 
      #& finding right leads
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
      :selected_id
    )
  end

  def current_lead
    current_lead=(lead)
    @current_lead = lead
  end



end
