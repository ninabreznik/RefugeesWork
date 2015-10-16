Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, controllers: {registrations: 'registrations'}

  mount GrapeSwaggerRails::Engine => '/swagger'
  mount API => '/api'

  resources :users do
    match '/users/:id/edit',            to: 'users#edit',       via: 'edit'
    member do
      post 'tracking_id'
      post 'accepted_terms_of_use'
      post 'affiliation_agreement'
    end
  end

  resources :leads
    root 'static_pages#welcome'
    match '/narocilo',                  to: 'leads#new',        via: 'get'
    match '/delim',                     to: 'leads#share',      via: 'get'
    get 'leads/show'
    get 'leads/new'
    get 'leads/edit'

  resources :paypal_notifications, only: [:create]
    match '/paypal_notification',       to: 'paypal_notifications#create',        via: 'post'

  resources :orders
    get '/address_book'                 => 'orders#address_book'
    get '/reserved'                     => 'orders#reserved'
    get '/bank_transaction'             => 'orders#bank_transaction'
    get '/wallet_payment_from_lead'     => 'orders#wallet_payment_from_lead'

  resources :static_pages
    get '/wallet_payment_type'          => 'static_pages#wallet_payment_type'
    get '/wallet_payment'               => 'static_pages#wallet_payment'
    get '/about'                        => 'static_pages#about'
    get '/info'                         => 'static_pages#info'
    get '/payment_type'                 => 'static_pages#payment'
    get '/profile'                      => 'static_pages#profile'
    get '/new_lead_confirmation'        => 'static_pages#new_lead_confirmation'
    get '/payment_confirmation'         => 'static_pages#payment_confirmation'
    get 'tracking_link'                 => 'static_pages#tracking_link'
    get 'terms_of_use'                  => 'static_pages#terms_of_use'
    get 'affiliation_agreement'         => 'static_pages#affiliation_agreement'
    get 'accepted_terms_confirmation'   => 'static_pages#accepted_terms_confirmation'
    get '/promo'                        => 'static_pages#promo'
    get '/promo_obvestilo_1'            => 'static_pages#promo_obvestilo_1'
    get '/promo_obvestilo_2'            => 'static_pages#promo_obvestilo_2'
    get '/promo_obvestilo_3'            => 'static_pages#promo_obvestilo_3'
    get '/promo_obvestilo_4'            => 'static_pages#promo_obvestilo_4'
    get '/promo_obvestilo_5'            => 'static_pages#promo_obvestilo_5'
    get '/price_list'                   => 'static_pages#price_list'
    get '/roadmap'                      => 'static_pages#roadmap'
    get '/faq'                          => 'static_pages#faq'

  end
