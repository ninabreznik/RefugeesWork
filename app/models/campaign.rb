class Campaign < ActiveRecord::Base

  belongs_to :user
  has_many :leads
  has_many :users
  has_many :reverse_relationships, foreign_key: "coowned_id", 
                                   class_name: "Relationship",
                                   dependent: :destroy
  has_many :coowners, through: :reverse_relationships, source: :coowner

  validates :title, presence: true
  validates :location, presence: true
  validates :title, uniqueness: { scope: :location }

end
