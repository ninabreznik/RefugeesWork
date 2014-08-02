class StaticPagesController < ApplicationController
  def home
    @campaigns = Campaign.all
  end

  def about
  end

  def faq
  end

  def contact
  end

  def all_campaigns
    @campaigns = Campaign.all
  end
end
