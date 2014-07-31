class Relationship < ActiveRecord::Base
  belongs_to :campaign
  belongs_to :user
  validates :user_id, presence: true
  validates :campaign_id, presence: true
end
