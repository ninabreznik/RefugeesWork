class CampaignsController < ApplicationController
  
  def index
    @user = current_user
    @campaigns = Campaign.all
  end 

  def show
    @campaign = Campaign.find_by_id(params[:id])
  end

  def new
    @campaign = Campaign.new
  end

  def create
    @campaign = current_user.campaigns.create(:title => params[:campaign][:title],:location => params[:campaign][:location])

    respond_to do |format|
      if @campaign.save
        format.html { redirect_to @campaign, notice: 'Campaign was successfully created.' }
        format.json { render action: 'show', status: :created, location: @campaign }
      else
        format.html { render action: 'new' }
        format.json { render json: @campaign.errors, status: :unprocessable_entity }
      end
    end
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

   private

    def campaign_params
      params.require(:campaign).permit(:title, :location)
    end
  
end
