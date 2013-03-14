puts "Enter Your First Name"
first_name = gets.chomp
puts "Enter Your Last Name"
last_name = gets.chomp
class Name
	def initialize (first_name, last_name)
    begin	
  	  raise "First name is nil" if first_name.empty?
  	  raise "Last name is nil" if last_name.empty?
  	  raise "First Name is not capitalize" if first_name != first_name.capitalize
      puts first_name + last_name
    rescue Exception => e
      puts e.message
    end
  end
end
obj = Name.new(first_name, last_name)
