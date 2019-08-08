class Habit < ApplicationRecord

  validates :name, presence: true
    validates :frequency, presence: true
    validates :count, presence: true
    validates :good_or_bad, presence: true

end
