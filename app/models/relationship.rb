class Relationship < ActiveRecord::Base
  belongs_to :campaign
  belongs_to :user
  validates :coowner_id, presence: true
  validates :coowned_id, presence: true
end
