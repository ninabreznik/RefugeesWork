# == Schema Information
#
# Table name: orders
#
#  id          :integer          not null, primary key
#  selector_id :integer
#  selected_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#  paid        :boolean          default(FALSE)
#  notes       :text
#

class Order < ActiveRecord::Base
  has_many :paypal_notifications
  belongs_to :selected, class_name: "Lead"
  belongs_to :selector, class_name: "User"
  
  validates :selected_id, presence: true
  validates :selector_id, presence: true
  
  def paypal_url(return_url, notify_url)
    values = {
      :business => 'nina.breznik@sosed.si',
      :cmd => '_xclick',
      :upload => 1,
      :return => return_url,
      :invoice => id,
      :notify_url => notify_url,
      :currency_code => 'EUR'
    }
      values.merge!({
        "amount" => 10,
        "item_name" => 'Kontakt',
        "item_number" => id,
        "quantity" => 1
      })
    "https://www.paypal.com/cgi-bin/webscr?" + values.to_query
  end

  

  # def paypal_payment_notification   #IPN - instant payment notification (by PayPal)
  #   if status == "Completed"
  #     self.update_attributes(:paid => true)
  #   end
  # end

end

