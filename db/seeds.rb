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
me= User.new(
  username: "fnziman",
  first_name: "Frankie",
  last_name: "Z",
  email: "frankie@spacetime.net",
  password: "frankie"
)

me.save!
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
                    due_date: Date.parse('2017-09-04'),
                    list_id: personal.id,
                    completed: true,
                    time_estimate: 65,
                    user_id: demo_user.id
                  )
dishes = Task.new(
                    title: "dishes",
                    notes: "make sure to soak before putting in dishwasher",
                    due_date: Date.parse('2017-09-09'),
                    list_id: personal.id,
                    completed: false,
                    time_estimate: 30,
                    user_id: demo_user.id
                  )
donaldson_project = Task.new(
                    title: "Donaldson Project",
                    notes: "dont forget that project managers name is Tracy",
                    due_date: Date.parse('2017-11-04'),
                    list_id: work.id,
                    completed: false,
                    time_estimate: 300,
                    user_id: demo_user.id
                  )
coffee_run = Task.new(
                    title: "coffee run",
                    notes: "the boss like two sugars and extra cream",
                    due_date: Date.parse('2017-09-04'),
                    list_id: work.id,
                    completed: true,
                    time_estimate: 15,
                    user_id: demo_user.id
                  )
brakes = Task.new(
                    title: "get brakes replaced",
                    notes: "don't go to the theif of a mechanic on 5th",
                    due_date: Date.parse('2017-10-04'),
                    completed: false,
                    time_estimate: 60,
                    user_id: demo_user.id
                  )
pickup_drycleaning = Task.new(
                    title: "pick up dry cleaning",
                    notes: "check and make sure they got the stain on my shirt",
                    due_date: Date.parse('2017-09-02'),
                    completed: false,
                    time_estimate: 5,
                    user_id: demo_user.id
                  )
laundry.save!
dishes.save!
donaldson_project.save!
coffee_run.save!
brakes.save!
pickup_drycleaning.save!
