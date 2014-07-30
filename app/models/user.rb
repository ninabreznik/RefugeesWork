class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :campaigns
  has_many :relationships, foreign_key: "coowner_id"
  has_many :coowned_campaigns, through: :relationships, source: :coowned  
  
  def coowning?(one_user)
    relationships.find_by(coowner_id: one_user.id)
  end

  def coown!(one_user)
    relationships.create!(coowned_id: one_user.id)
  end

  def unfollow!(one_user)
    relationships.find_by(coowned_id: one_user.id).destroy
  end

end
