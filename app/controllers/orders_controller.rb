class OrdersController < ApplicationController
  protect_from_forgery :except => [:create]

  def index
    @orders = Order.all
    @order = Order.find_by_id(params[:id])
    @leads = Lead.all
    @lead = @order.selected if @order.present?
  end

  def create
    @lead = Lead.find_by_id(params[:order][:selected_id])
    current_user.select!(@lead)
    @user = current_user
    order = Order.all.where(selector_id: current_user.id, selected_id: @lead.id).first
    redirect_to order_path(id: @lead.reverse_orders.where(selector_id: current_user.id).first.id)
  end

  def show
    @order = Order.find(params[:id])
    @lead = @order.selected
  end

  def edit
    @order = Order.find(params[:id])
    @order.update_attributes(:paid => true)
    redirect_to address_book_path
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

  private

  def order_params
    params.require(:order).permit(
      :paid,
      :notes
    )
  end

end
