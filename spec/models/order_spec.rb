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

require 'rails_helper'

describe Order do

  describe :validations do
    specify { expect(build(:order)).to be_valid }

    specify { expect(build(:order, selected: nil)).not_to be_valid }
    specify { expect(build(:order, selector: nil)).not_to be_valid }
  end

  describe :scopes do
    describe :paid_by_selector do
      context '2 of 5 Orders paid' do
        let(:user1) { create :user }
        let(:user2) { create :user }
        before do
          create_list :order, 3
          create_list :order, 2, paid: true, selector: user1
          create_list :order, 4, paid: true, selector: user2
        end
        context 'for user 1' do
          it 'finds 2 Orders' do
            expect(Order.paid_by_selector(user1).count).to eq 2
          end
        end
        context 'for user 2' do
          it 'finds 4 Orders' do
            expect(Order.paid_by_selector(user2).count).to eq 4
          end
        end
      end
    end
  end
end
