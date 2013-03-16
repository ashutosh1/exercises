puts "Enter The Function Name"
$function_name = gets.chomp
puts "Enter The Single Line Of Code For Ex.(puts [1,2,3].inject(1){|i,v| i *= v})"
$code = gets.chomp
#defining the function name entered by user as instance method for class DefineFunction and passing a blck to execute the code
class DefineFunction
  self.class_eval do
    define_method("#{$function_name}") {eval("#{$code}")}
  end
end
#calling the newly defined function 
DefineFunction.new.send($function_name.to_sym)
