class OrdersController < ApplicationController

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
        redirect_to leads_url
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

  def more_than_5_orders_for_lead
  end

  private

  def lead_params
    params.require(:lead).permit(
      :paid
    )
  end

end
