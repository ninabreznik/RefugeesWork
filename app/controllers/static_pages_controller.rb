class StaticPagesController < ApplicationController

  def about
    render 'about', layout: false
  end

  def profile
    if current_user.present?
      @user = current_user
      tracking_link_customers = Lead.all.where(tracking_link: @user.tracking_id).count
      tracking_id_customers = Lead.all.where(affiliation_id: @user.tracking_id).count
      @all_affiliation_customer_for_certain_user = tracking_link_customers + tracking_id_customers
      @user_tracking_id = @user.tracking_id 
      @user_tracking_link = leads_new_path(id: @user_tracking_id)
    end
  end

  def tracking_link
    @tracking_id = current_user.tracking_id
    @tracking_link = leads_new_path(id: @tracking_id)
  end

  def terms_of_use
    if current_user.present?
      @user = current_user
    end
  end

  def new_lead_confirmation
    render 'new_lead_confirmation', layout: 'adwords_layout'
  end

  def wallet_payment
    @order = Order.find_by_id(params[:order])
  end
  
  def info
  end

  def promo
  end

  def promo_obvestilo_1
    if current_user.present?
      image_path = File.join(Rails.root, 'public', 'images', 'obvestilo_1a.png')
      tracking_id = current_user.tracking_id.gsub(/\W/, '')
      drawing_stuff = ''
      8.times do |i|
        drawing_stuff << "-draw \"text 3440,#{320+i*373} '#{tracking_id}'\" "
      end
      # Don't add anything stupid here like text from the user
      `convert #{image_path} -font Helvetica -pointsize 25 -rotate 270 #{drawing_stuff} -rotate 90 '/tmp/#{tracking_id}.jpg'`
      send_file "/tmp/#{tracking_id}.jpg", type: 'image/jpeg' #, disposition: :inline
    end
  end

  def promo_obvestilo_2
    if current_user.present?
      image_path = File.join(Rails.root, 'public', 'images', 'obvestilo_1a.png')
      tracking_id = current_user.tracking_id.gsub(/\W/, '')
      drawing_stuff = ''
      8.times do |i|
        drawing_stuff << "-draw \"text 3440,#{320+i*373} '#{tracking_id}'\" "
      end
      # Don't add anything stupid here like text from the user because then user can harm
      `convert #{image_path} -font Helvetica -pointsize 20 -rotate 270 #{drawing_stuff} -rotate 90 '/tmp/#{tracking_id}.jpg'`
      send_file "/tmp/#{tracking_id}.jpg", type: 'image/jpeg' #, disposition: :inline
    end
  end

  def promo_obvestilo_3
    if current_user.present?
      image_path = File.join(Rails.root, 'public', 'images', 'obvestilo_3a.png')
      tracking_id = current_user.tracking_id.gsub(/\W/, '')
      drawing_stuff = ''
      8.times do |i|
        drawing_stuff << "-draw \"text 3440,#{320+i*373} '#{tracking_id}'\" "
      end
      # Don't add anything stupid here like text from the user
      `convert #{image_path} -font Helvetica -pointsize 20 -rotate 270 #{drawing_stuff} -rotate 90 '/tmp/#{tracking_id}.jpg'`
      send_file "/tmp/#{tracking_id}.jpg", type: 'image/jpeg' #, disposition: :inline
    end
  end

  def promo_obvestilo_4
    if current_user.present?
      image_path = File.join(Rails.root, 'public', 'images', 'obvestilo_4a.png')
      tracking_id = current_user.tracking_id.gsub(/\W/, '')
      drawing_stuff = ''
      8.times do |i|
        drawing_stuff << "-draw \"text 3440,#{320+i*373} '#{tracking_id}'\" "
      end
      # Don't add anything stupid here like text from the user
      `convert #{image_path} -font Helvetica -pointsize 20 -rotate 270 #{drawing_stuff} -rotate 90 '/tmp/#{tracking_id}.jpg'`
      send_file "/tmp/#{tracking_id}.jpg", type: 'image/jpeg' #, disposition: :inline
    end
  end

  def promo_obvestilo_5
    if current_user.present?
      image_path = File.join(Rails.root, 'public', 'images', 'obvestilo_5a.png')
      tracking_id = current_user.tracking_id.gsub(/\W/, '')
      drawing_stuff = ''
      8.times do |i|
        drawing_stuff << "-draw \"text 3440,#{320+i*373} '#{tracking_id}'\" "
      end
      # Don't add anything stupid here like text from the user
      `convert #{image_path} -font Helvetica -pointsize 20 -rotate 270 #{drawing_stuff} -rotate 90 '/tmp/#{tracking_id}.jpg'`
      send_file "/tmp/#{tracking_id}.jpg", type: 'image/jpeg' #, disposition: :inline
    end
  end

  def accepted_terms_confirmation
  end

  def price_list
  end

  def roadmap
  end

  def faq
  end
  
  def payment_confirmation
  end


end
