class UsersController < ApplicationController
  #before_filter :authenticate_user!, except: [:api_index, :api_show]

  def show
    user = User.find_by_id(params[:id])
    render :json => user
  end

  def edit
  end

  def update
  end

  def index
    @users = User.all
    render :json => @users
  end

  def destroy
  end


end
