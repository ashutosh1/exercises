class ChildString < String 
  def exclude?(char)
    self.include?(char) ? false : true
  end

  def palindrome?
    self.reverse.eql?(self) ? true : false
  end
end
puts "Enter Any string"
obj_string = ChildString.new(gets.chomp)
puts "Please enter the name of method from these methods(exclude?(char), palindrome?)"
method = gets.chomp

puts obj_string.instance_eval{eval method}

