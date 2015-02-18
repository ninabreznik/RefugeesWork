ActiveAdmin.register User do

  permit_params :email, :wallet, :password, :password_confirmation

  index do
    selectable_column
    id_column
    column :email  
    column :wallet
    column :tracking_id
    column :name
    column :accepted_terms_of_use
    column :sign_in_count
    column :last_sign_in_at
    column :current_sign_in_at
    column :created_at
    column :updated_at


    actions
  end

    filter :email  
    filter :wallet
    filter :tracking_id
    column :name
    column :accepted_terms_of_use
    filter :sign_in_count
    filter :last_sign_in_at
    filter :current_sign_in_at
    filter :created_at
    filter :updated_at
    filter :reset_password_sent_at

  form do |f|
    f.inputs "User Details" do
      f.input :email
      f.input :wallet
    end
    f.actions
  end

end


