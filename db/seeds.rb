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
