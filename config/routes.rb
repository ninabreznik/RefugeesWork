Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users

  resources :users do
    member do
      get :coowning
    end
  end

  resources :orders
  resources :leads
  resources :paypal_notifications, only: [:create]

 # match '/paypal_notification',       to: 'paypal_notifications#create',        via: 'post'
    # match '/orders',           to: 'orders#index',         via: 'get'
    # match '/orders/:id',       to: 'orders#show',          via: 'get'
    # match '/orders/:id',       to: 'orders#delete',        via: 'delete'



  
  #post 'paypal_confirm'  => 'orders#paypal_payment_notification'  #'paypal_confirm' is a callback I provide to Paypal and it triggers 'orders#paypal_confirm'

  get 'leads/index'

  get 'leads/show'

  get 'leads/new'

  get 'leads/edit'

  get 'leads/reserved_leads'

  get 'leads/bought_leads'



  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".
  # match '/signup',       to: 'users#new',            via: 'get'
  # match '/signin',       to: 'sessions#new',         via: 'get'
  # match '/signout',      to: 'sessions#destroy',     via: 'delete'
  #match '/orders',       to: 'orders#create',        via: 'post' 

 

  # You can have the root of your site routed with "root"
  root 'leads#index'

  # Example of regular route:

  get '/contact' => 'static_pages#contact'
  get '/pricing' => 'static_pages#pricing'
  get '/about' => 'static_pages#about'
  get '/bank_transfer' => 'static_pages#bank_transfer'
  get '/payment_type' => 'static_pages#payment'
  get 'payment_confirmation' => 'static_pages#payment_confirmation'
  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):


  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
