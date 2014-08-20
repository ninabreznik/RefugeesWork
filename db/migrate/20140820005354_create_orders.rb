class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :selector_id
      t.integer :selected_id

      t.timestamps
    end
  end
end
