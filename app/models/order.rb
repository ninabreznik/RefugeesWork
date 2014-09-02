class Order < ActiveRecord::Base
  
  belongs_to :selected, class_name: "Lead"
  belongs_to :selector, class_name: "User"
  
  validates :selected_id, presence: true
  validates :selector_id, presence: true
  
  def paypal_url(return_url, notify_url)
    values = {
      :business => 'nina.breznik-facilitator@sosed.si',
      :cmd => '_xclick',
      :upload => 1,
      :return => return_url,
      :invoice => id,
      :notify_url => notify_url
    }
      values.merge!({
        "amount" => 10,
        "item_name" => 'bla',
        "item_number" => 2,
        "quantity" => 1
      })
    "https://www.sandbox.paypal.com/cgi-bin/webscr?" + values.to_query
  end

  # def paypal_payment_notification   #IPN - instant payment notification (by PayPal)
  #   if status == "Completed"
  #     self.update_attributes(:paid => true)
  #   end
  # end

end

