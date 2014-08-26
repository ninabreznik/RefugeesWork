class PaymentsController < ApplicationController
  
  def create
    @lead = Lead.find_by_id(params[:payment][:paid_id])
    @user = current_user
    current_user.pay!(@lead)
    redirect_to :controller => 'leads', :action => 'bought_leads'
    # ########################################################################### 
    # Check if @lead.paid was updated 
    # and then change @user.wallet and @user.payment
    # ###########################################################################
      # @new_paid = @lead.paid

      #   @user = current_user
      # @old_paid = @lead.paid
      # @lead.update_attributes(lead_params)
      # @price = 10
      # if @old_paid != @new_paid
      #   new_payment = @user.payment + @price
      #   new_wallet_status = @user.wallet - @price
      #   @user.update_attributes(:payment => new_payment)
      #   @user.update_attributes(:wallet => new_wallet_status)
      # end
  end

  def destroy
    Payment.find(params[:id]).destroy
    redirect_to leads_url
  end

end
