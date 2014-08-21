TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    shallow do
      resources :boards, except: [:new, :edit] do
        resources :lists, only: :index do
          resources :cards, only: :index do
            resources :items, only: :index
          end
        end
      end
    end

    resources :lists, only: [:create, :update, :destroy]
    resources :cards, only: [:create, :update, :destroy]
    resources :items, only: [:create, :update, :destroy]

    # resources :items
    # resources :board_memberships
    # resources :card_assignments
  end
end
