begin
  puts "Enter The String To Check Palindrom.."
  user_input = gets.chomp.downcase
  exit(0) if user_input.eql?('q')
  puts  user_input.reverse.eql?(user_input) ? "its a palindrome" : "its not a palindrome"
end until user_input =='q'

