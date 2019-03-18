class EnemiesController < ApplicationController
  def index
  end
  
  def enemies
    @enemies = Enemy.all
    render json: @enemies
  end

  def show
    @enemy = Enemy.find(params[:id])
  end
end
