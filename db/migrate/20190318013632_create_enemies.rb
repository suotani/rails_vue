class CreateEnemies < ActiveRecord::Migration[5.2]
  def change
    create_table :enemies do |t|
      t.string :name
      t.integer :hp
      t.integer :power

      t.timestamps
    end
  end
end
