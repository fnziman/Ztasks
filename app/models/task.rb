# == Schema Information
#
# Table name: tasks
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  notes         :text
#  due_date      :date             not null
#  completed     :boolean          default(FALSE), not null
#  list_id       :integer          not null
#  time_estimate :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Task < ActiveRecord::Base
  validates :title, presence: true

  belongs_to :list #not sure what to do about This
end
