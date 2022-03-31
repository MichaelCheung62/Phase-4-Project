Rails.application.routes.draw do
  
  resources :orders
  resources :customers
  resources :users
  resources :drinks
  

  get '/me', to: "users#show"
  

  post '/login', to: "sessions#create"
  delete '/logout', to: 'sessions#destroy'


  
 
end
