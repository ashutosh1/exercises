puts "Enter The first Value"
first_value = gets.chomp
puts "Enter Airthmetic Operator"
operator = gets.chomp
puts "Enter The Second Value"
second_value = gets.chomp

def calculator(first_value, operator, second_value)
  [first_value , second_value].inject(operator.to_sym)
  #[first_value].inject(second_value , operator.to_sym)
  #eval("first_value" + operator + "second_value")
end

puts calculator(first_value.to_f , operator , second_value.to_f)
