def factorial(n)
  abort "Please enter integer only, greater than or equal to zero" if(!n.is_a?(Integer) || n < 0)
  fact = 1 
  for i in 1..n 
    fact *= i 
  end 
  fact
end

puts factorial(5)

