# == Schema Information
#
# Table name: tasks
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  notes         :text
#  due_date      :date
#  completed     :boolean          default(FALSE)
#  time_estimate :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  user_id       :integer          not null
#  list_id       :integer
#

class Task < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :user
  # belongs_to :list #cant do this with null list_id's
end
