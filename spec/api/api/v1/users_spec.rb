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
    it "returns the contact data for the iPhone app's contact page" do
      expected_response = {
          id:                 user.id,
          sign_in_count:      user.sign_in_count,
          current_sign_in_at: user.current_sign_in_at,
          last_sign_in_at:    user.last_sign_in_at,
          current_sign_in_ip: user.current_sign_in_ip,
          last_sign_in_ip:    user.last_sign_in_ip,
          created_at:         user.created_at,
          updated_at:         user.updated_at,
          wallet:             user.wallet,
          business_type:      user.business_type,
          email:              user.email,
          tracking_id:        user.tracking_id,
          city:               user.city,
          country:             user.country,
          name:               user.name,
          accepted_terms_of_use: user.accepted_terms_of_use
      }.to_json

      get '/api/v1/users/me', auth_token: user.api_key.access_token

      expect(response.body).to eq expected_response
      expect(response.status).to eq 200
    end
  end
end
