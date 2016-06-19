require 'test_helper'

class LeadsControllerTest < ActionController::TestCase

  test "should get index" do
    create_list(:lead, 2)
    create(:lead, address: 'United Kingdom')
    get :index
    assert_response :success
    assert_equal 2, assigns(:count_for_berlin)
    assert_equal 1, assigns(:count_for_uk)
  end
end
