class StaticPagesController < ApplicationController

  def new_lead_confirmation
    render 'new_lead_confirmation', layout: 'adwords_layout'
  end

  def info
  end

  def welcome
  end

  def payment_confirmation
  end

end
