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
    @habit = Habit.create(params)
    if @habit.valid?
    end
  end

  def update

  end


end