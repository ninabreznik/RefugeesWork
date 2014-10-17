class StaticPagesController < ApplicationController

  def home
    @campaigns = Campaign.all.sort_by{|e| e[:title]}
    @campaign = Campaign.new
  end

  def about
  end

  def faq
  end

  def contact
  end

  def all_campaigns
    @campaigns = Campaign.find_by_title('Painting')
  end

  def payment_confirmation
    @user = current_user
    @lead = Lead.find_by_id(params[:lead])
  end

  def wallet_payment
    @user = current_user
  end

end
