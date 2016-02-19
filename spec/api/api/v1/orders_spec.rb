require 'rails_helper'

describe API::V1::Orders, api: true do

  it 'prefix should be set to api' do
    expect(API::V1::Orders.prefix).to eq('api')
  end

  it 'format should be set to :json' do
    expect(API::V1::Orders.format).to eq(:json)
  end

  xit 'version should be set to v1' do
    expect(API::V1::Orders.version).to eq('v1')
  end

  describe 'GET /api/orders/selector' do
    let(:user) { create :user, :with_api_key }
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get '/api/v1/orders/selector', auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    it "returns the list of order data" do
      create_list :order, 3, selector: user
      get '/api/v1/orders/selector', auth_token: user.api_key.access_token
      expect(response.status).to eq 200
      response_data = JSON.parse(response.body)
      expect(response_data.count).to eq 3
    end
  end
end
