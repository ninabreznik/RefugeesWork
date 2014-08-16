class LeadsController < ApplicationController
  def index
    @leads = Lead.all
  end

  def show
    @lead = Lead.find_by_id(params[:id])
  end

  def new
    @lead = Lead.new
    @business_types = [["Painting", "Painting"], ["Fasades", "Fasades"], ["Renovations", "Renovations"], ["Mechanical Installations", "Mechanical Installations"], ["Electrical Installations", "Electrical Installations"], ["Knauf", "Knauf"], ["Ceramics", "Ceramics"], ["Parquet", "Parquet"], ["Roofing", "Roofing"], ["Masonry", "Masonry"]]
    @time = [["As soon as possible"], ["In the next 14 days"], ["In 1-3 months"], ["Flexible"]]
  end

  def create
    @lead = Lead.create(:name => params[:lead][:name], :email => params[:lead][:email], :description => params[:lead][:description], 
                         :zip => params[:lead][:zip], :phone => params[:lead][:phone], :business_type => params[:lead][:business_type], 
                         :time => params[:lead][:time])
    redirect_to @lead
  end 
  
  def edit
  end

  def update
    @lead = Lead.find(params[:id])
  end


  private

  def campaign_params
    params.require(:lead).permit(:name, :email, :description, :zip, :phone, :business_type, :time)
  end

end
