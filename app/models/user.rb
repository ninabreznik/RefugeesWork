class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :campaigns, dependent: :destroy
  
  has_many :relationships, foreign_key: "coowner_id"
  has_many :coowned_campaigns, through: :relationships, source: :coowned 

  has_many :orders, foreign_key: "selector_id"
  has_many :selected_leads, through: :orders, source: :selected 

  has_many :payments, foreign_key: "payer_id"
  has_many :paid_leads, through: :payments, source: :paid 
  
  # #############################################################################
  # Relationship between User and Campaign
  # #############################################################################
  def coowning?(one_campaign)
    relationships.find_by_coowned_id(one_campaign.id)
  end

  def coown!(one_campaign)
    relationships.create!(coowned_id: one_campaign.id)
  end

  def uncoown!(one_campaign)
    relationships.find_by_coowned_id(one_campaign.id).destroy  
  end

   # #############################################################################
  # Order between User and Lead
  # #############################################################################
  def selecting?(one_lead)
    orders.find_by_selected_id(one_lead.id)
  end

  def select!(one_lead)
    orders.create!(selected_id: one_lead.id)
  end

  # #############################################################################
  # Payment between User and Lead
  # #############################################################################
  def paid?(one_lead)
    payments.find_by_paid_id(one_lead.id)
  end

  def pay!(one_lead)
    payments.create!(paid_id: one_lead.id)
  end


end
