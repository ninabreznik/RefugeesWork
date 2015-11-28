# == Schema Information
#
# Table name: leads
#
#  id             :integer          not null, primary key
#  name           :string(255)
#  email          :string(255)
#  description    :text
#  created_at     :datetime
#  updated_at     :datetime
#  zip            :integer
#  phone          :string(255)
#  business_type  :string(255)
#  time           :string(255)
#  location       :string(255)
#  address        :string(255)
#  user_id        :integer
#  tracking_link  :string(255)
#  affiliation_id :string(255)
#

require 'rails_helper'

describe Lead do

  describe :validations do
    specify { expect(build(:lead)).to be_valid }

    specify { expect(build(:lead, business_type: "")).not_to be_valid }
    specify { expect(build(:lead, business_type: nil)).not_to be_valid }

    specify { expect(build(:lead, address: "")).not_to be_valid }
    specify { expect(build(:lead, address: nil)).not_to be_valid }

    specify { expect(build(:lead, description: "")).not_to be_valid }
    specify { expect(build(:lead, description: nil)).not_to be_valid }

    specify { expect(build(:lead, name: "")).not_to be_valid }
    specify { expect(build(:lead, name: nil)).not_to be_valid }

    specify { expect(build(:lead, email: "")).not_to be_valid }
    specify { expect(build(:lead, email: nil)).not_to be_valid }

    specify { expect(build(:lead, address: "")).not_to be_valid }
    specify { expect(build(:lead, address: nil)).not_to be_valid }

    specify { expect(build(:lead, time: "")).not_to be_valid }
    specify { expect(build(:lead, time: nil)).not_to be_valid }
  end

  describe :scopes do

  end

  describe '#steps' do
    subject { build(:lead) }
    rules = { I18n.t('lead-new.form.business-types.building_house')           => %w[first building],
        I18n.t('lead-new.form.business-types.architect')                => %w[first architect],
        I18n.t('lead-new.form.business-types.masonry')                  => %w[first masonry],
        I18n.t('lead-new.form.business-types.renovation')               => %w[first renovation],
        I18n.t('lead-new.form.business-types.mechanical_installations') => %w[first mechanical_installations],
        I18n.t('lead-new.form.business-types.electrical_installations') => %w[first electrical_installations],
        I18n.t('lead-new.form.business-types.painting')                 => %w[first painting],
        I18n.t('lead-new.form.business-types.fasades')                  => %w[first fasades],
        I18n.t('lead-new.form.business-types.roofing')                  => %w[first roofing]
      }
    rules.keys.each do |key|
      context "business_type is #{key}" do
        it "returns #{rules[key]}" do
          subject.business_type = key
          expect(subject.steps).to eq rules[key]
        end
      end
      context "business_type is 'unknown'" do
        it "returns [first second]" do
          subject.business_type = 'unknown'
          expect(subject.steps).to eq ['first', 'second']
        end
      end
    end
  end
end
