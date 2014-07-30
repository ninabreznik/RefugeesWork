class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.integer :coowner_id
      t.integer :coowned_id

      t.timestamps
    end
  add_index :relationships, :coowner_id
  add_index :relationships, :coowned_id  
  add_index :relationships, [:coowner_id, :coowned_id ], unique: true
  end
end
