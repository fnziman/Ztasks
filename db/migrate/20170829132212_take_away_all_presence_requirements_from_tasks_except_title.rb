class TakeAwayAllPresenceRequirementsFromTasksExceptTitle < ActiveRecord::Migration[5.1]
  def change
    drop_table :tasks

    create_table :tasks do |t|
      t.string :title, null: false
      t.text :notes
      t.date :due_date
      t.boolean :completed, default: false
      t.integer :list_id
      t.integer :time_estimate

      t.timestamps
    end
    add_index :tasks, :title
    add_index :tasks, :list_id
  end
end
