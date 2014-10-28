class OrdersController < ApplicationController
  protect_from_forgery :except => [:create]
  # before_action :authenticate_user!
  
  def index
    @orders = Order.all
    @order = Order.find_by_id(params[:id])
    #@order = Order.where(selected_id: @lead.id, selector_id: current_user.id)
    @leads = Lead.all
    #@lead = @order.selected
    #@bought_leads = Order.all.where(selector_id: current_user.id, paid: true)
    @lead = @order.selected if @order.present?
  end

  def create
    @lead = Lead.find_by_id(params[:order][:selected_id])
    current_user.select!(@lead)
    @price = 10
    @user = current_user
    redirect_to order_path(id: @lead.reverse_orders.where(selector_id: current_user.id).first.id)
  end

  def show
    @order = Order.find(params[:id])
    @lead = @order.selected
  end

  def edit
    @order = Order.find(params[:id])
    if current_user.wallet >= 10
      @order.update_attributes(:paid => true)
      @price = 10
      new_wallet_status = current_user.wallet - @price
      current_user.update_attributes(:wallet => new_wallet_status)
    else
     # @order.paypal_payment_notification
    end
    redirect_to order_path(@order)
  end

  def destroy
    Order.find(params[:id]).destroy
    redirect_to reserved_url
  end

  def update
    @order = Order.find(params[:id])
    notes_before_update = @order.notes
    @order.update_attributes(order_params)
    if @order.notes != notes_before_update
      redirect_to order_url(@order)
    else
      redirect_to address_book_url
    end
  end

  def bank_transaction
    @order = Order.find(params[:id])
    @lead = @order.selected
  end

  def wallet_payment_from_lead
    @order = Order.find(params[:id])
    @lead = @order.selected
  end

  def address_book
    @orders = Order.all
  end

  def reserved
    @orders = Order.all
  end

  #def paypal_payment_notification   #IPN - instant payment notification (by PayPal)
    # ...
    # process params from paypal!
    # find the user/order somehow
    # if its already confirmed return some 503 or something
    # otherwise set a flag on an order .. or whatever all is good (200)
  #end

  private

  def order_params
    params.require(:order).permit(
      :paid,
      :notes
    )
  end

end
