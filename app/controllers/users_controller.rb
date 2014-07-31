class UsersController < ApplicationController
  before_filter :authenticate_user!

  def show
  end

  def edit
  end

  def index
  end

  private

  # def correct_user
  #   @user = User.find_by_id(params[:id])
  #   redirect_to(root_path) unless current_user?(@user)
  # end

end
