require 'rails_helper'

describe API::V1::Leads, 'Lead resource', api: true do

  let(:user) { create :user, :with_api_key }

  it 'prefix should be set to api' do
    expect(API::V1::Leads.prefix).to eq('api')
  end

  it 'format should be set to :json' do
    expect(API::V1::Leads.format).to eq(:json)
  end

  xit 'version should be set to v1' do
    expect(API::V1::Leads.version).to eq('v1')
  end

  describe 'GET /api/leads/' do
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get '/api/v1/leads', auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    context 'given 3 leads' do
      it 'returns 3 objects' do
        create_list(:lead, 3)
        get '/api/v1/leads', auth_token: user.api_key.access_token
        expect(JSON.parse(response.body).count).to eq 3
      end
    end
  end

  describe 'GET /api/leads/:id' do
    let(:lead) { create(:lead) }
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get "/api/v1/leads/#{lead.id}", auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    context 'lead not found' do
      it "returns error code 404" do
        get "/api/v1/leads/#{rand(99)}", auth_token: user.api_key.access_token
        expect(response.body).to eq "{\"error\":\"404 Not found\"}"
        expect(response.status).to eq 404
      end
    end
  end

  describe 'GET /api/leads/:id/orders' do
    let(:lead) { create(:lead) }
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        get "/api/v1/leads/#{lead.id}/orders", auth_token: 'invalid-auth-token'
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    context 'lead not found' do
      it "returns error code 404" do
        get "/api/v1/leads/#{rand(99)}/orders", auth_token: user.api_key.access_token
        expect(response.body).to eq "{\"error\":\"404 Not found\"}"
        expect(response.status).to eq 404
      end
    end
    context 'given 3 orders' do
      it 'returns 3 objects' do
        create_list(:order, 3, selected: lead)
        get "/api/v1/leads/#{lead.id}/orders", auth_token: user.api_key.access_token
        expect(JSON.parse(response.body).count).to eq 3
      end
    end
  end

  describe 'POST /api/leads' do
    let(:lead) { build(:lead) }
    context 'all mandatory parameters given' do
      let(:params) do
        {
          lead: {
            business_type: lead.business_type,
            address:       lead.address,
            description:   lead.description,
            time:          lead.time,
            name:          lead.name,
            email:         lead.email
          }
        }
      end
      it "returns the new lead object" do
        post '/api/v1/leads', params
        expected_keys = %w(id name email description created_at updated_at zip phone business_type time location address user_id tracking_link affiliation_id)
        expect(JSON.parse(response.body).keys).to match_array expected_keys
        expect(response.status).to eq 201
      end
      it "creates new lead object" do
        expect {
          post '/api/v1/leads', params
          }.to change(Lead, :count).by(1)
      end
    end
  end

  describe 'PUT /api/leads/:id' do
    let!(:lead) { build(:lead) }
    let!(:existing_lead) { create(:lead) }
    let(:params) do
      {
        lead: {
          business_type: lead.business_type,
          address:       lead.address,
          description:   lead.description,
          time:          lead.time,
          name:          lead.name,
          email:         lead.email
        },
        auth_token: user.api_key.access_token
      }
    end
    context 'invalid auth_token is sent' do
      it 'should respond with error code 400' do
        put "/api/v1/leads/#{existing_lead.id}", params.merge(auth_token: 'invalid-auth-token')
        expect(response.body).to eq "{\"error\":\"Unauthorized. Invalid or expired token.\"}"
        expect(response.status).to eq 401
      end
    end
    context 'lead not found' do
      it "returns error code 404" do
        put "/api/v1/leads/#{rand(99)}", params
        expect(response.body).to eq "{\"error\":\"404 Not found\"}"
        expect(response.status).to eq 404
      end
    end
    context 'lead does not belong to user' do
      it "returns error code 404" do
        put "/api/v1/leads/#{existing_lead.id}", params
        expect(response.body).to eq "{\"error\":\"403 Forbidden\"}"
        expect(response.status).to eq 403
      end
    end
    context 'all mandatory parameters given' do
      it "returns the updated Lead object" do
        existing_lead.update(user: user)
        put "/api/v1/leads/#{existing_lead.id}", params
        expected_keys = %w(id name email description created_at updated_at zip phone business_type time location address user_id tracking_link affiliation_id)
        expect(JSON.parse(response.body).keys).to match_array expected_keys
        expect(response.status).to eq 200
      end
    end
  end

end
