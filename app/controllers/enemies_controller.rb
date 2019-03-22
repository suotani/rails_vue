class EnemiesController < ApplicationController
  protect_from_forgery :only => [:update] 
  
  before_action :set_enemy, only: [:show, :update]
  def index
  end
  
  def enemies
    @enemies = Enemy.all
    render json: @enemies
  end

  def show
    @enemy = Enemy.find(params[:id])
    render json: @enemy
  end
  
  def update
    if @enemy.update(enemy_params)
      render json: {result: true}
    else
      render json: {result: false, errors: @enemy.errors.full_messages}
    end
  end
  
  private
  
  def set_enemy
    @enemy = Enemy.find(params[:id])
  end
  
  def enemy_params
    params.require(:enemy).permit(:name, :power, :hp, :magic_point, :magic_power, :skill_power)
  end
end
