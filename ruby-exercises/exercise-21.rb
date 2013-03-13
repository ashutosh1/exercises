puts "Enter Your First Name"
first_name = gets.chomp
puts "Enter Your Last Name"
last_name = gets.chomp
class Name
	def initialize (first_name, last_name)
    begin	
  	  raise "First Name is not capitalize or nil" if first_name.empty? || first_name != first_name.capitalize
  	  raise "Last name is nil" if last_name.empty?
      puts first_name + last_name
    end
  end
end
obj = Name.new(first_name, last_name)
