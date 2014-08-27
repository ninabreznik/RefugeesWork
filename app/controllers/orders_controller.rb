class OrdersController < ApplicationController

  def create
    @lead = Lead.find_by_id(params[:order][:selected_id])
    #@user = User.find_by_id(params[:order][:selector_id])
    current_user.select!(@lead)
    @price = 10
    @user = current_user
    if @user.wallet >= @price
      redirect_to :controller => 'static_pages', :action => 'payment_confirmation', lead: @lead.id
    else
      redirect_to :controller => 'static_pages', :action => 'payment'
    end
  end

  def update
      @order = Order.find(params[:id])
    if @order.valid?
      @order.update_attributes(order_params)
      redirect_to orders_url
    else
      render 'edit'
    end
  end

  def index
    # if user_signed_in?
    #   current_users_payments = Payment.where(payer_id: current_user.id)
    #   current_users_payments_ids = []
    #   current_users_payments.each do |p|
    #     current_users_payments_ids << p.paid_id
    #   end
    # @bought_leads = Lead.where(id: current_users_payments_ids)
    # else
    #   @bought_leads = []
    # end
    # render 'leads/bought_leads'

    @lead = Lead.find_by_id(params[:id])
    if user_signed_in?
      current_users_orders = Order.where(selector_id: current_user.id)
      current_users_leads_ids = []
      current_users_orders.each do |o|
        current_users_leads_ids << o.selected_id
      end
      @ordered_leads = Lead.where(id: current_users_leads_ids)
    else
      @ordered_leads = []
    end
  end

  def destroy
    Order.find(params[:id]).destroy
    redirect_to orders_url
  end


  def paypal_confirm
    # ...
    # process params from paypal!
    # find the user/order somehow
    # if its already confirmed return some 503 or something
    # otherwise set a flag on an order .. or whatever all is good (200)

  end

end
