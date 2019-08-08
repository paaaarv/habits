class HabitSerializer < ActiveModel::Serializer
  attributes :id, :name, :frequency, :good_or_bad, :count
end
