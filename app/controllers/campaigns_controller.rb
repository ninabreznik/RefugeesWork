class CampaignsController < ApplicationController
  
  def index
    @user = current_user
    @campaigns = Campaign.all
    @campaign = Campaign.find_by_id(params[:id])
    @campaign = Campaign.new
    @current_campaign 
  end 

  def show
    @campaign = Campaign.find_by_id(params[:id])
    @current_campaign 
  end

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = current_user.campaigns.create(:title => params[:campaign][:title],:location => params[:campaign][:location])
    current_user.coown!(@campaign)
    redirect_to @campaign
  end

  def edit
    @campaign = Campaign.find_by_id(params[:id])
  end

  def update
    @campaign = Campaign.find(params[:id])
    if @campaign.update_attributes(campaign_params)
      flash[:success] = "Campaign updated"
      redirect_to @campaign
    else
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
