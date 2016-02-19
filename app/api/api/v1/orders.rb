class API::V1::Orders < Grape::API
  include API::V1::Shared

  resources :orders do
    desc "Returns all orders with user of associated authentication token as selector"
    params do
      requires :auth_token, type: String, desc: "User authentication token"
    end
    get :selector do
      authenticate!
      orders = Order.where(selector_id: current_user.id).order(updated_at: :desc)
      present orders, with: ::API::V1::Entities::Order
    end
  end
end
