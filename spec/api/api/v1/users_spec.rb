require 'rails_helper'

describe API::V1::Users, api: true do

  it 'prefix should be set to api' do
    expect(API::V1::Users.prefix).to eq('api')
  end

  it 'format should be set to :json' do
    expect(API::V1::Users.format).to eq(:json)
  end

  xit 'version should be set to v1' do
    expect(API::V1::Users.version).to eq('v1')
  end

  describe 'GET /api/users/me' do
    let(:user) { create :user, :with_api_key }
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get '/api/v1/users/me', auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    it "returns the user data" do
      expected_response = {
          id:                     user.id,
          sign_in_count:          user.sign_in_count,
          current_sign_in_at:     user.current_sign_in_at,
          last_sign_in_at:        user.last_sign_in_at,
          current_sign_in_ip:     user.current_sign_in_ip,
          last_sign_in_ip:        user.last_sign_in_ip,
          created_at:             user.created_at,
          updated_at:             user.updated_at,
          wallet:                 user.wallet,
          business_type:          user.business_type,
          email:                  user.email,
          tracking_id:            user.tracking_id,
          city:                   user.city,
          country:                user.country,
          name:                   user.name,
          accepted_terms_of_use:  user.accepted_terms_of_use,
          access_token:           user.api_key.access_token
      }.to_json

      get '/api/v1/users/me', auth_token: user.api_key.access_token

      expect(response.body).to eq expected_response
      expect(response.status).to eq 200
    end
  end

  describe 'GET /api/users/me/orders' do
    let(:user) { create :user, :with_api_key }
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get '/api/v1/users/me/orders', auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    it "returns the list of order data" do
      create_list :order, 3, selector: user
      get '/api/v1/users/me/orders', auth_token: user.api_key.access_token
      expect(response.status).to eq 200
      response_data = JSON.parse(response.body)
      expect(response_data.count).to eq 3
    end
  end

  describe 'GET /api/users/me/leads' do
    let(:user) { create :user, :with_api_key }
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get '/api/v1/users/me/leads', auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    it "returns the list of leads data" do
      create_list :lead, 3, user: user
      get '/api/v1/users/me/leads', auth_token: user.api_key.access_token
      expect(response.status).to eq 200
      response_data = JSON.parse(response.body)
      expect(response_data.count).to eq 3
    end
  end

  describe 'GET /api/users/me/selected_leads' do
    let(:user) { create :user, :with_api_key }
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get '/api/v1/users/me/selected_leads', auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    it "returns the list of selected leads data" do
      create_list :order, 3, selector: user
      get '/api/v1/users/me/selected_leads', auth_token: user.api_key.access_token
      expect(response.status).to eq 200
      response_data = JSON.parse(response.body)
      expect(response_data.count).to eq 3
    end
  end

  describe 'PUT /api/users/me' do
    let(:user) { build :user }
    let(:existing_user) { create(:user, :with_api_key) }
    let(:params) do
      {
        user: {
          email:                  user.email,
          name:                   user.name,
          business_type:          user.business_type,
          accepted_terms_of_use:  user.accepted_terms_of_use,
          city:                   user.city,
          country:                user.country,
          wallet:                 user.wallet,
          tracking_id:            user.tracking_id,
        },
        auth_token: existing_user.api_key.access_token
      }
    end
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        put '/api/v1/users/me', params.merge(auth_token: 'invalid-auth-token')
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    it "returns the updated user data" do
      put '/api/v1/users/me', params

      expect(response.status).to eq 200
      response_data = JSON.parse(response.body)
      expected_fields = %w(id sign_in_count current_sign_in_at last_sign_in_at current_sign_in_ip last_sign_in_ip created_at updated_at wallet business_type email tracking_id city country name accepted_terms_of_use access_token)
      expect(response_data.keys).to match_array expected_fields
    end
  end
end
