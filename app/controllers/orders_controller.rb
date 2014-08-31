class OrdersController < ApplicationController

  def index
    @orders = Order.all
    @order = Order.find_by_id(params[:id])
    #@order = Order.where(selected_id: @lead.id, selector_id: current_user.id)
    @leads = Lead.all
    #@lead = @order.selected
    #@bought_leads = Order.all.where(selector_id: current_user.id, paid: true)
    if @order.present?
      @lead = @order.selected 
    end
  end

  def create
    @lead = Lead.find_by_id(params[:order][:selected_id])
    current_user.select!(@lead)
    @price = 10
    @user = current_user
    redirect_to lead_path(id: @lead.id)
  end

  def show
  end

  def edit
    @order = Order.find(params[:id])
    @order.update_attributes(:paid => true)
    @price = 10
    new_wallet_status = current_user.wallet - @price
    current_user.update_attributes(:wallet => new_wallet_status)
      render '/orders'
  end

  def destroy
    Order.find(params[:id]).destroy
    redirect_to orders_url
  end

  def edit
  end

  def update
    @order = Order.find(params[:id])
    @order.update_attributes(order_params)
    redirect_to orders_url
  end


  def paypal_confirm
    # ...
    # process params from paypal!
    # find the user/order somehow
    # if its already confirmed return some 503 or something
    # otherwise set a flag on an order .. or whatever all is good (200)
  end

  def more_than_5_orders_for_lead
  end

  private

  def order_params
    params.require(:order).permit(
      :paid,
      :notes
    )
  end

end
