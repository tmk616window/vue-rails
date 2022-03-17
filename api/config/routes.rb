Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :tasks
    resource :session, only: %i[create destroy show]
    resources :ranking, only: %i[index]
    resources :pro_languages, only: [:create, :destroy]
    resources :tools, only: [:create, :destroy]
    resources :contents, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :ranking, only: %i[index]
  end
end
