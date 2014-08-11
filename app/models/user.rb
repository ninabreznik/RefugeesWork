class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :campaigns, dependent: :destroy
  has_many :relationships, foreign_key: "coowner_id"
  has_many :coowned_campaigns, through: :relationships, source: :coowned 
  

  def coowning?(one_campaign)
    relationships.find_by_coowned_id(one_campaign.id)
  end

  def coown!(one_campaign)
    relationships.create!(coowned_id: one_campaign.id)
  end

  def uncoown!(one_campaign)
    relationships.find_by_coowned_id(one_campaign.id).destroy  
  end

end
