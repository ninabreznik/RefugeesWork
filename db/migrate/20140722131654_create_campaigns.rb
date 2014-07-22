class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :business_category
      t.string :title
      t.string :location
      t.integer :budget
      t.string :keywords
      t.integer :sharers

      t.timestamps
    end
  end
end
