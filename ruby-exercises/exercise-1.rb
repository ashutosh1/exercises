#count the occurence of each alphabet letters
puts "Enter The String To Count..."
str = gets.chomp
hash = {}
str = str.downcase
#removing blank space and charcter other than alphabet
str = str.gsub(/[^A-z]/, "")
str.each_char do |ch|
  hash[ch] = (hash[ch] || 0) + 1
end
puts hash
