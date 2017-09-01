class AddIndexToTasksListId < ActiveRecord::Migration[5.1]
  def change
    add_index :tasks, :list_id
  end
end
