ActiveAdmin.register Lead do

permit_params :business_type, :zip, :location, :description, :time, :name, :email, :phone

index do
  selectable_column
  id_column
  column :business_type  
  column :zip
  column :location
  column :description
  column :time
  column :name
  column :email
  column :phone
  actions
end

  filter :business_type  
  filter :zip
  filter :location
  filter :description
  filter :time
  filter :name
  filter :email
  filter :phone
  filter :created_at
  filter :updated_at

form do |f|
  f.inputs "Lead Details" do
  f.input :business_type  
  f.input :zip
  f.input :location
  f.input :description
  f.input :time
  f.input :name
  f.input :email
  f.input :phone
  end
  f.actions
end

end
