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
end
