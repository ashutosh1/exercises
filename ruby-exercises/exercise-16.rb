puts "Enter The String"
string = gets.chomp
puts "Enter the word to be searched"
pattern = gets.chomp
puts "Total Occurences found: #{string.scan(/#{pattern}/i).size}"
puts string.gsub(/(?<grp>#{pattern})/i, '(\k<grp>)')

