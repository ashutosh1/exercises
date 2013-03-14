puts "Enter The String"
string = gets.chomp
puts string.gsub(/[aeiou]/i, '*')

