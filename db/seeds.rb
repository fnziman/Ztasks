# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.delete_all
demo_user = User.new(
  username: "demo_login",
  first_name: "Demo",
  last_name: "Login",
  email: "demo@login.com",
  password: "demopassword"
)
demo_user.save!

List.delete_all
personal = List.new(title: "Personal", user_id: demo_user.id)
work = List.new(title: "Work", user_id: demo_user.id)
personal.save!
work.save!

Task.delete_all
laundry = Task.new(
                    title: "laundry",
                    notes: "use tide, not downy",
                    due_date: Date.parse('12-09-2017'),
                    list_id: personal.id,
                    completed: true,
                    time_estimate: 65
                  )
dishes = Task.new(
                    title: "dishes",
                    notes: "make sure to soak before putting in dishwasher",
                    due_date: Date.parse('09-09-2017'),
                    list_id: personal.id,
                    completed: false,
                    time_estimate: 30
                  )
donaldson_project = Task.new(
                    title: "Donaldson Project",
                    notes: "dont forget that project managers name is Tracy",
                    due_date: Date.parse('11-10-2017'),
                    list_id: work.id,
                    completed: false,
                    time_estimate: 300
                  )
coffee_run = Task.new(
                    title: "coffee run",
                    notes: "the boss like two sugars and extra cream",
                    due_date: Date.parse('04-09-2017'),
                    list_id: work.id,
                    completed: true,
                    time_estimate: 15
                  )
laundry.save!
dishes.save!
donaldson_project.save!
coffee_run.save!
