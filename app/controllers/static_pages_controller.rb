class StaticPagesController < ApplicationController

  def home
    @campaigns = Campaign.all.sort_by{|e| e[:title]}
    @campaign = Campaign.new
  end

  def about
    render 'about', layout: false
  end

  def faq
  end

  def contact
  end

  def all_campaigns
    @campaigns = Campaign.find_by_title('Painting')
  end

  def payment_confirmation
  end

  def wallet_payment
    @order = Order.find_by_id(params[:order])
  end

end
