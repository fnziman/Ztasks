Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :lists, only: [:create, :index, :show, :update, :destroy]
    resources :tasks, only: [:create, :index, :show, :update, :destroy]

  end

end
