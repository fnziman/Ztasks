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
travel = List.new(title: "Travel", user_id: demo_user.id)
personal.save!
work.save!
travel.save!

Task.delete_all
laundry = Task.new(
  title: "laundry",
  notes: "use tide, not downy",
  due_date: Date.today,
  list_id: personal.id,
  completed: true,
  time_estimate: 65,
  user_id: demo_user.id
)
dishes = Task.new(
  title: "dishes",
  notes: "make sure to soak before putting in dishwasher",
  due_date: Date.today,
  list_id: personal.id,
  completed: false,
  time_estimate: 30,
  user_id: demo_user.id
)
donaldson_project = Task.new(
  title: "Donaldson Project",
  notes: "dont forget that project managers name is Tracy",
  due_date: Date.tomorrow,
  list_id: work.id,
  completed: false,
  time_estimate: 300,
  user_id: demo_user.id
)
coffee_run = Task.new(
  title: "coffee run",
  notes: "the boss like two sugars and extra cream",
  due_date: Date.tomorrow,
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
  due_date: Date.today + 4,
  list_id: personal.id,
  completed: false,
  time_estimate: 5,
  user_id: demo_user.id
)
book_flight = Task.new(
  title: "book flight to Cancun",
  notes: "look for a first class award flight option",
  due_date: Date.today + 7,
  list_id: travel.id,
  completed: false,
  time_estimate: 65,
  user_id: demo_user.id
)
book_hotel = Task.new(
  title: "book hotel",
  notes: "try to find a room with a balconony over looking the beach",
  due_date: Date.today + 7,
  list_id: travel.id,
  completed: false,
  time_estimate: 50,
  user_id: demo_user.id
)
pick_up_kids = Task.new(
  title: "pick up the kids from school",
  notes: "make sure to bring after school snacks",
  due_date: Date.today,
  list_id: personal.id,
  completed: false,
  time_estimate: 5,
  user_id: demo_user.id
)
grovel_project = Task.new(
  title: "Grovel Project",
  notes: "the sewer reroute needs to have a D connection installed at 65 feet",
  due_date: Date.today + 16,
  list_id: work.id,
  completed: false,
  time_estimate: 200,
  user_id: demo_user.id
)
book_massage = Task.new(
  title: "book couples massage",
  notes: "I heard that Tracy is amazing",
  due_date: Date.today + 10,
  list_id: travel.id,
  completed: false,
  time_estimate: 15,
  user_id: demo_user.id
)
groceries = Task.new(
  title: "go grocery shopping",
  notes: "apples, oranges, lunch meat, cheese, milk, and bread",
  due_date: Date.today,
  list_id: personal.id,
  completed: false,
  time_estimate: 35,
  user_id: demo_user.id
)
wash_floors = Task.new(
  title: "wash the floors",
  notes: "use vinegar instead of the cleaner that left residue",
  due_date: Date.today,
  list_id: personal.id,
  completed: false,
  time_estimate: 45,
  user_id: demo_user.id
)
bathroom = Task.new(
  title: "clean the bathroom",
  notes: "dont forget the spot behind the toilet",
  due_date: Date.today,
  list_id: personal.id,
  completed: true,
  time_estimate: 25,
  user_id: demo_user.id
)
rental_car = Task.new(
  title: "book a rental car",
  notes: "avis had some good deals",
  due_date: Date.today + 7,
  list_id: travel.id,
  completed: true,
  time_estimate: 35,
  user_id: demo_user.id
)
gerrison_project = Task.new(
  title: "Gerrison Project",
  notes: "need to pre-order 75ftx35ft slab of white marble",
  due_date: Date.today + 12,
  list_id: work.id,
  completed: true,
  time_estimate: 25,
  user_id: demo_user.id
)
dentist = Task.new(
  title: "dentist appointment",
  notes: "dont forget to brush teeth beforehand",
  due_date: Date.tomorrow,
  list_id: personal.id,
  completed: false,
  time_estimate: 55,
  user_id: demo_user.id
)
dermatologist = Task.new(
  title: "dermatologist appointment",
  notes: "dont forget to ask about spot on upper arm",
  due_date: Date.tomorrow,
  list_id: personal.id,
  completed: false,
  time_estimate: 45,
  user_id: demo_user.id
)
laundry.save!
dishes.save!
donaldson_project.save!
coffee_run.save!
brakes.save!
pickup_drycleaning.save!
book_flight.save!
book_hotel.save!
pick_up_kids.save!
grovel_project.save!
book_massage.save!
groceries.save!
wash_floors.save!
bathroom.save!
rental_car.save!
gerrison_project.save!
dentist.save!
dermatologist.save!
