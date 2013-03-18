obj_string = String.new("Demo of singlton")

def obj_string.name_and_id
  "#{self.object_id} , #{self}"
end

class << obj_string
  def again_getting_name_and_id 
    "#{self.object_id} , #{self}"
  end
end

puts obj_string.name_and_id
puts obj_string.again_getting_name_and_id
puts "Demo".name_and_id

