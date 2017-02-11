require 'test_helper'

class LeadsControllerTest < ActionController::TestCase

  test 'assigns leads and counts correctly' do
    create_list(:lead, 2, address: 'Germany - Berlin')
    create(:lead, address: 'United Kingdom')

    get :index

    assert_response :success
    assert_equal 1, assigns(:addresses_count)['United Kingdom']
    assert_equal 2, assigns(:addresses_count)['Germany - Berlin']
    assert_equal 0, assigns(:addresses_count)['Mars']
    assert_not_nil assigns(:sorted_leads)
  end

  test "should get new" do
    get :new
    assert_response :success
  end
end
