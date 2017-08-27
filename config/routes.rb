Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :lists, only: [:create, :index, :show, :update, :destroy]
    resources :tasks, only: [:create, :index, :show, :update, :destroy]
    # still need:
    # - `GET /api/tasks/:due_date`
      # + tasks for a specific due date
  end

end
