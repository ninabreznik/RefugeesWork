class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # validates_format_of :tracking_id, with: /\A[a-zA-Z0-9\s\-_]+\z/, :on => :update, presence: false

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :orders, foreign_key: "selector_id"
  has_many :selected_leads, through: :orders, source: :selected

  has_many :leads

  after_create :send_admin_mail
  def send_admin_mail
    #UserMailer.welcome_email(self).deliver
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
