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

require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
