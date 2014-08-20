class AddIndexToOrder < ActiveRecord::Migration
  def change
    add_index :orders, [:selector_id, :selected_id ], unique: true 
  end
end
