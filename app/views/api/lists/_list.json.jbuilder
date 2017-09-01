json.extract!(list, :id, :title, :user_id)

# json.set! :task_ids do
#   json.array! list.tasks do |task|
#     json.id task.id
#   end
# end
