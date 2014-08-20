class CampaignsController < ApplicationController
  
  def index
    @campaigns = Campaign.all.sort_by{|e| e[:title]}
    @campaign = Campaign.find_by_id(params[:id])
    respond_to do |f|    #For RESTFUL API
      f.html
      f.json do 
        render json: { campaigns: @campaigns }
      end
    end
  end 

  def show
    @campaign = Campaign.find_by_id(params[:id])
    @current_campaign 
    @campaigns = Campaign.all.sort_by{|e| e[:title]}
    respond_to do |f|    #For RESTFUL API
      f.html
      f.json do 
        render json: { campaign: @campaign }
      end
    end
  end


  def new
    @campaign = Campaign.new
    @business_types = [["Painting", "Painting"], ["Fasades", "Fasades"], ["Renovations", "Renovations"], ["Mechanical Installations", "Mechanical Installations"], ["Electrical Installations", "Electrical Installations"], ["Knauf", "Knauf"], ["Ceramics", "Ceramics"], ["Parquet", "Parquet"], ["Roofing", "Roofing"], ["Masonry", "Masonry"]]
    @business_locations = [["Ljubljana", "Ljubljana"], ["Maribor", "Maribor"], ["Celje", "Celje"], ["Kranj", "Kranj"], ["Koper", "Koper"], ["Nova Gorica", "Nova Gorica"], ["Novo mesto", "Novo mesto"], ["Murska Sobota", "Murska Sobota"]]
  end

  def create
    @user = current_user
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
    Relationship.find(params[:id]).destroy
    flash[:success] = "User deleted."
    redirect_to root_url
  end

   private

    def campaign_params
      params.require(:campaign).permit(
        :title, 
        :location, 
        :coowner_id, 
        :coowned_id 
      )
    end

    def current_campaign
      current_campaign=(campaign)
      @current_campaign = campaign
    end

end
