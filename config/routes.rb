Rails.application.routes.draw do
  scope '(:locale)' do
    devise_for :admin_users, ActiveAdmin::Devise.config
    ActiveAdmin.routes(self)
    devise_for :users, controllers: {registrations: 'registrations'}

    resources :users do
      match '/users/:id/edit',            to: 'users#edit',            via: 'edit'
      match '/users',                     to: 'users#index',           via: 'get' # API SHOW ALL USERS /users
      match '/users/:id',                 to: 'users#show',            via: 'get' # API SHOW ONE USER  /users/:id
    end

    resources :leads
      get 'leads/show'
      get 'leads/new'
      match '/api_leads',            to: 'leads#api_index',       via: 'get'   #API SHOW ALL LEADS /api_leads
      match '/api_leads/:id',        to: 'leads#api_show',        via: 'get'   #API SHOW ONE LEAD  /api_leads/:id
      #get 'leads/edit' TODO: Enable users to edit their posts

    resources :orders
      get '/address_book'                 => 'orders#address_book'

    resources :static_pages
      root 'static_pages#welcome'
      get '/info'                         => 'static_pages#info'
      get '/new_lead_confirmation'        => 'static_pages#new_lead_confirmation'
  end
end
