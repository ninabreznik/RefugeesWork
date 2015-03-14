ActiveAdmin.register Lead do

permit_params :business_type, :zip, :location, :description, :time, :name, :email, :phone, :tracking_link, :affiliation_id

index do
  selectable_column
  id_column
  column :time
  column :location
  column :zip
  column :description
  column :name
  column :address
  column :phone
  column :email
  column :tracking_link
  column :affiliation_id
  actions
end

  filter :time
  filter :location
  filter :zip
  filter :description
  filter :name
  filter :address
  filter :phone
  filter :email
  filter :tracking_link
  filter :affiliation_id
  filter :created_at
  filter :updated_at

form do |f|
  f.inputs "Lead Details" do
  f.inputs :time
  f.inputs :location
  f.inputs :zip
  f.inputs :description
  f.inputs :name
  f.inputs :address
  f.inputs :phone
  f.inputs :email
  f.inputs :tracking_link
  f.inputs :affiliation_id
  end
  f.actions
end

end
