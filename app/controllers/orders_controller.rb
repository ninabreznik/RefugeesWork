class OrdersController < ApplicationController

  def create
    @lead = Lead.find_by_id(params[:order][:selected_id])
    @user = User.find_by_id(params[:order][:selector_id])
    current_user.select!(@lead)
    redirect_to leads_url
  end

  def destroy
    Order.find(params[:id]).destroy
    redirect_to leads_url
  end

  def number_of_orders_for_lead
    @number_of_orders_for_lead = @lead.selectors.count
  end

end
