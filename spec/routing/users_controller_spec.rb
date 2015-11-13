require 'rails_helper'

describe UsersController, 'Routing', type: :routing do

  describe '#edit' do
    it 'get edit' do
      expected_params = { controller: 'users', action: 'edit', id: '1234' }
      expect({ get: '/users/1234/edit' }).to route_to expected_params
    end
  end
end
