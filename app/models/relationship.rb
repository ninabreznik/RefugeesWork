class Relationship < ActiveRecord::Base
  belongs_to :coowned, class_name: "Campaign"
  belongs_to :coowner, class_name: "User"
  validates :coowned_id, presence: true
  validates :coowner_id, presence: true
end
