class Lead < ActiveRecord::Base

  before_create :assign_location_from_zip
# ###############################################################################
# Relationship betweer User & Lead, through Order
# ###############################################################################
  has_many :reverse_orders, foreign_key: "selected_id", 
                                   class_name: "Order",
                                   dependent: :destroy
  has_many :selectors, through: :reverse_orders, source: :selector

  # :::::::::::::: VALIDATIONS :::::::::::::::::::

  validates :business_type, presence: true
  validates :time, presence: true
  validates :description, presence: true
  validates :zip, presence: true, length: { is: 4 } 
  validates :email, presence: true
  validates :phone, presence: true
  # validates :name, presence: true

  def assign_location_from_zip
    if self.zip > 999 && self.zip < 1999
      self.location = "Ljubljana"
    elsif self.zip > 1999 && self.zip < 2999
      self.location = "Maribor"
    elsif self.zip > 2999 && self.zip < 3999
      self.location = "Celje"
    elsif self.zip > 3999 && self.zip < 4999
      self.location = "Kranj" 
    elsif self.zip > 4999 && self.zip < 5999
      self.location = "Nova Gorica"
    elsif self.zip > 5999 && self.zip < 6999
      self.location = "Koper"
    elsif self.zip > 7999 && self.zip < 8999
      self.location = "Novo mesto"
    elsif self.zip > 8999 && self.zip < 10000
      self.location = "Murska Sobota"                 
    end 
  end

end
