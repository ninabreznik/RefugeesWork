# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string(255)      default(""), not null
#  encrypted_password     :string(255)      default(""), not null
#  reset_password_token   :string(255)
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :string(255)
#  last_sign_in_ip        :string(255)
#  created_at             :datetime
#  updated_at             :datetime
#  wallet                 :integer          default(0)
#  business_type          :string(255)
#  tracking_id            :string(255)
#  name                   :string(255)
#  accepted_terms_of_use  :boolean
#  city                   :string(255)
#  country                :string(255)
#

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # validates_format_of :tracking_id, with: /\A[a-zA-Z0-9\s\-_]+\z/, :on => :update, presence: false

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_one :api_key, dependent: :destroy
  has_many :orders, foreign_key: "selector_id"
  has_many :selected_leads, through: :orders, source: :selected

  has_many :leads

  after_create :send_admin_mail
  def send_admin_mail
    UserMailer.welcome_email(self).deliver if Rails.env == :production
  end

   # #############################################################################
  # Order between User and Lead
  # #############################################################################
  def selecting?(one_lead)
    orders.find_by_selected_id(one_lead.id)
  end

  def select!(one_lead)
    orders.create!(selected_id: one_lead.id)
  end


end
