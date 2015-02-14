ActiveAdmin.register Order do
  permit_params :paid, :notes, :selector_id, :selected_id

  index do
    selectable_column
    id_column
    column :selector_id
    column :selected_id
    column :paid
    column :notes
    column :created_at
    actions
  end

    filter :selector_id 
    filter :selected_id
    filter :paid
    filter :notes
    filter :created_at

  form do |f|
    f.inputs "Order Details" do
      f.input :selector_id
      f.input :selected_id
      f.input :paid
      f.input :notes
    end
    f.actions
  end

end


