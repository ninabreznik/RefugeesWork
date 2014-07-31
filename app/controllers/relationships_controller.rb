class RelationshipsController < ApplicationController

  def create
    @campaign = Campaign.find_by_id(params[:relationship][:coowned_id])
    current_user.coown!(@campaign)
    redirect_to @campaign
  end

  def destroy
    Relationship.find(params[:id]).destroy
    flash[:success] = "User deleted."
    redirect_to campaigns_url
  end

end

