Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, controllers: {registrations: 'registrations'}

  resources :users do
    match '/users/:id/edit',            to: 'users#edit',       via: 'edit'
  end

  resources :leads
    get 'leads/show'
    get 'leads/new'
    #get 'leads/edit' TODO: Enable users to edit their posts

  resources :orders
    get '/address_book'                 => 'orders#address_book'

  resources :static_pages
    root 'static_pages#welcome'
    get '/info'                         => 'static_pages#info'
    get '/new_lead_confirmation'        => 'static_pages#new_lead_confirmation'

  end
