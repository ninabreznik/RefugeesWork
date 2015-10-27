class UsersController < ApplicationController
  before_filter :authenticate_user!

  def create

  end

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

  def accepted_terms_of_use
    accepted_terms_of_use = params[:user][:accepted_terms_of_use]
    @user = current_user
    @user.accepted_terms_of_use = accepted_terms_of_use
    @user.save
    # UserMailer.terms_of_use(@user).deliver
    redirect_to profile_path
  end

   def affiliation_agreement
    affiliation_agreement = params[:user][:affiliation_agreement]
    @user = current_user
    @user.affiliation_agreement = affiliation_agreement
    @user.save
    # UserMailer.affiliation_agreement(@user).deliver
    redirect_to profile_path
  end

  def tracking_id
    name = params[:user][:name].gsub(/\W/, '')

    @user = current_user
    @user.name = name
    @user.tracking_id = generate_tracking_id(name)
    if @user.save
      # UserMailer.affiliation_code(@user).deliver
    end
    redirect_to profile_path
  end


  private

  def generate_tracking_id(name)
    @tracking_id = "#{name}_#{SecureRandom.hex[0..4]}"
  end

end
