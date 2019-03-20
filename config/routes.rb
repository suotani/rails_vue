Rails.application.routes.draw do
  
  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/enemies/list", to: "enemies#enemies"
  resources :enemies , only: [:index, :show, :update]
end
