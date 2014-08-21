TrelloClone::Application.routes.draw do
  root to: 'static_pages#root'

  resources :users
  resource :session

  namespace :api, defaults: { format: :json } do
    resources :boards, except: [:new, :edit]
    resources :lists, only: [:create, :update, :destroy]
    resources :cards, only: [:create, :update, :destroy]
    resources :items, only: [:create, :update, :destroy]
  end



    # resources :items
    # resources :board_memberships
    # resources :card_assignments
end
