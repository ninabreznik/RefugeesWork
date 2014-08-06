class CampaignsController < ApplicationController
  
  def index
    #@user = current_user
    @campaigns = Campaign.all.sort_by{|e| e[:title]}
    @campaign = Campaign.find_by_id(params[:id])
    #@campaign = Campaign.find_by_id(params[:id])
    #@campaign = Campaign.new
    #@current_campaign 
  end 

  def show
    @campaign = Campaign.find_by_id(params[:id])
    @current_campaign 
    @campaigns = Campaign.all.sort_by{|e| e[:title]}
  end

  def new
    @campaign = Campaign.new
    @business_types = [["Painting", "Painting"], ["Fasades", "Fasades"], ["Renovations", "Renovations"], ["Mechanical Installations", "Mechanical Installations"], ["Electrical Installations", "Electrical Installations"], ["Knauf", "Knauf"], ["Ceramics", "Ceramics"], ["Parquet", "Parquet"], ["Roofing", "Roofing"], ["Masonry", "Masonry"]]
    @business_locations = [["LJ", "LJ"], ["MB", "MB"], ["CE", "CE"], ["KR", "KR"], ["KP", "KP"], ["NG", "NG"], ["NM", "NM"], ["MS", "MS"]]
  end

  def create
    @campaign = current_user.campaigns.create(:title => params[:campaign][:title],:location => params[:campaign][:location])
    if @campaign.valid?
      current_user.coown!(@campaign)
      redirect_to @campaign
   else
      #flash[:success] = "Campaign with these attributes already exists"
      redirect_to (new_campaign_path)
    end
  end

  def edit
    @campaign = Campaign.find_by_id(params[:id])
  end

  def update
    @campaign = Campaign.find(params[:id])
    if @campaign.valid?
      @campaign.update_attributes(campaign_params)
      flash[:success] = "Campaign updated"
      redirect_to @campaign
    else
      #flash[:success] = "Campaign with these attributes already exists"
      render 'edit'
    end
  end

  def destroy
    Campaign.find(params[:id]).destroy
    redirect_to campaigns_url
  end

   private

    def campaign_params
      params.require(:campaign).permit(:title, :location, :coowner_id, :coowned_id )
    end

    def current_campaign
      current_campaign=(campaign)
      @current_campaign = campaign
    end

end
