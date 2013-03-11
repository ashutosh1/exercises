puts "Enter The String"
string = gets.chomp
string = string.downcase
string = string.gsub(/[aeiou]/, '*')
puts string
