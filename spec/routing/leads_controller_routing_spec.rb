require 'rails_helper'

describe LeadsController, 'Routing', type: :routing do

  describe '#index' do
    it 'get index' do
      expected_params = { controller: 'leads', action: 'index' }
      expect({ get: '/leads' }).to route_to expected_params
    end
  end

  describe '#show' do
    it 'get show' do
      expected_params = { controller: 'leads', action: 'show', id: '23' }
      expect({ get: '/leads/23' }).to route_to expected_params
    end
  end

  describe '#update' do
    it 'get update' do
      expected_params = { controller: 'leads', action: 'update', id: '23' }
      expect({ put: '/leads/23' }).to route_to expected_params
    end
  end

  describe '#destroy' do
    it 'get destroy' do
      expected_params = { controller: 'leads', action: 'destroy', id: '23' }
      expect({ delete: '/leads/23' }).to route_to expected_params
    end
  end
end
