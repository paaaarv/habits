class CreateHabits < ActiveRecord::Migration
  def change
    create_table :habits do |t|
      t.string :name
      t.integer :frequency
      t.integer :count
      t.string :good_or_bad

      t.timestamps
    end
  end
end
