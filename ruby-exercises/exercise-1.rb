puts "Enter The String To Count..."
str = gets.chomp
hash = {}
str = str.downcase.gsub(/[^A-z]/, "")
dup = str.split('').uniq
dup.each{|ch| hash[ch] = str.count(ch)}
puts hash

