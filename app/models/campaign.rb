class Campaign < ActiveRecord::Base

  belongs_to :user
  has_many :leads
  has_many :users
  has_many :relationships, foreign_key: "coowned_id"
  has_many :coowners, through: :relationships, source: :coowner 



end
