puts "Enter The String To Check Palindrom.."
string = gets.chomp
string = string.downcase
if (string.eql?('q'))
	exit(0)
  #abort "Text Entered by user is q"
end
string.reverse.eql?(string) ? 	str = "its a palindrome" : 	str = "its not a palindrome"
puts str

