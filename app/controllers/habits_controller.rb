require 'pry'

class HabitsController < ApplicationController

  def show
    @habit = Habit.find(params[:id])
    render json: @habit
  end

  def new
    @habit= Habit.new

  end

  def create
    binding.pry
    @habit = Habit.create(habits_params)
    if @habit.valid?
    end
  end

  private

    def habits_params
      params.require(:habit).permit(:name, :frequency, :type, :id)
    end

end
