class RelationshipsController < ApplicationController

  def create
    @campaign = Campaign.find_by_id(params[:relationship][:coowned_id])
    current_user.coown!(@campaign)
    redirect_to @campaign
  end

  def destroy
  end

end

