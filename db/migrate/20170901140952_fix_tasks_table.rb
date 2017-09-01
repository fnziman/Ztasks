class FixTasksTable < ActiveRecord::Migration[5.1]
  def change
    add_column :tasks, :user_id, :integer, null: false
    add_index :tasks, :user_id
  end
end
