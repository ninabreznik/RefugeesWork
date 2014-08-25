class PaymentsController < ApplicationController
  
  def create
    @lead = Lead.find_by_id(params[:payment][:paid_id])
    @user = current_user
    current_user.pay!(@lead)
    redirect_to :controller => 'leads', :action => 'bought_leads'
  end

  def destroy
    Payment.find(params[:id]).destroy
    redirect_to leads_url
  end

end
