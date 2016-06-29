FactoryGirl.define do
  factory :lead do
    name 'Awesome Lead'
    email 'lead@lead.foo'
    description 'Translator offer'
    zip 10_997
    phone '+490000000'
    business_type 'Translation'
    address 'Germany - Berlin'
  end
end
