loop do
  puts "Write the one line code(For ex. def a(n) puts n end; a([1,2,3,4]) or any ruby code) to be run or press 'q' to quit"
  code = gets.chomp
  break if code =~ /^[Qq]/
  puts "Please Press Enter To Execute Your Code Or Press 'q' To Quit"
  execute = gets.chomp
  break if execute =~ /^[Qq]/
  eval(code) if execute == ""
  puts "You must press 'enter' to execute your code or 'q' to quit , Please write your code again and press enter" if execute != ""
end
