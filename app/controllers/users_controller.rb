class UsersController < ApplicationController
  before_filter :authenticate_user!

  def show
  end

  def edit
  end

  def update
  end

  def index
    @users = User.all
  end

  def destroy
  end

end
