puts "Enter the csv file name with complete path for ex(if you have file in /opt then enter /opt/filename.csv or if file in same folder then just enter the filename.csv)"
file_path = gets.chomp
file_name = File.basename(file_path,".csv")
file_name = file_name[0..-2] if file_name[file_name.length - 1] == "s"

objects , attribute_names =  [] , [] 
Object.const_set(file_name.capitalize, Class.new do
  lines = File.readlines(file_path)
  attribute_names = lines[0].chomp.split(",")
 	attribute_names.each do |func_name| 
 	  define_method ("set_#{func_name}") { |val| instance_variable_set("@#{func_name}", val) }
 	  define_method ("get_#{func_name}") { "#{func_name} : #{instance_variable_get("@#{func_name}")}" }
 	end
  for line in 1..lines.length-1 
    #creating objects for each line and setting the attributes for those objects
    objects[line - 1] = self.new
    values_in_lines = lines[line].chomp.split(",")
    attribute_names.each_with_index{|func_name , index| objects[line - 1].send("set_" + func_name , values_in_lines[index])}
  end
end)

#Fetching the data for each object or per line and displaying those values 
objects.each do|object|
  attribute_names.each{|func_name| puts object.send("get_" + func_name)}
  puts 
end
