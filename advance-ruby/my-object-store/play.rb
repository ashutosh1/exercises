require_relative 'myobject_store'
class Play
  attr_accessor :age, :fname, :email
  include MyObjectStore 
  
  def validate
    raise "Age is not present or it is less than 18 Year" if !self.age || self.age < 18 
    raise "Fname is not present or it is less than Two Char" if !self.fname || self.fname.length < 2 
    raise "Email is not present" unless self.email  
    return true
  end
end
p2 = Play.new
p2.age = 1
p2.fname = "Jhon"  
p2.email = "mike@yahoo.com"
p2.save #it won't save object because age is less than two

p2 = Play.new
p2.age = 19
p2.fname = "Jhon"  
p2.save #it wont save object email is not present

p2 = Play.new
p2.age = 21
p2.fname = "Mike"  
p2.email = "mike@yahoo.com"
p2.save 

p3 = Play.new
p3.age = 25
p3.fname = "Jhon"  
p3.email = "jhon@yahoo.com"
p3.save

puts p2.validate
puts Play.count
puts Play.find_by_fname("Mike")
puts Play.find_by_fname("Mike").first.fname
puts Play.find_by_age(21)
puts Play.find_by_age(21).first.age

