class AddColumnSkillPowerToEnemy < ActiveRecord::Migration[5.2]
  def change
    add_column :enemies, :skill_power, :integer
    add_column :enemies, :magic_power, :integer
    add_column :enemies, :magic_point, :integer
  end
end
