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
  column :city
  column :business_type
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
  filter :city
  filter :business_type
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
  f.inputs :city, collection: [
    ["Germany - Baden-Württemberg"],
    ["Germany - Bavaria"],
    ["Germany - Berlin"],
    ["Germany - Brandenburg"],
    ["Germany - Bremen"],
    ["Germany - Hamburg"],
    ["Germany - Hesse"],
    ["Germany - Lower Saxony"],
    ["Germany - Mecklenburg-Vorpommern"],
    ["Germany - North Rhine-Westphalia"],
    ["Germany - Rhineland-Palatinate"],
    ["Germany - Saarland"],
    ["Germany - Saxony"],
    ["Germany - Saxony-Anhalt"],
    ["Germany - Schleswig-Holstein"],
    ["Germany - Thuringia"],
    ["Austria"],
    ["Slovenia"],
    ["Croatia"],
    ["Hungary"],
    ["Serbia"],
    ["Greece"],
    ["Turkey"],
    ["Egypt"],
    ["Jordan"],
    ["Lebanon"],
    ["Other"]
  ]
  f.inputs :business_type, collection: [
    ["Volunteering"],
    ["Freelancing"],
    ["Co-founding"],
    ["Organizing"],
    ["Research"],
    ["Learning"],
    ["Collaboration"]
  ]
  end
  f.actions
end

end
