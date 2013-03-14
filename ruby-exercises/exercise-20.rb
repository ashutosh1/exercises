def factorial(n)
  begin
    raise "Negative number entered" if n < 0
    n == 0 ? 1 : n * factorial(n-1)
  rescue Exception => e
    puts e.message
  end
end
puts factorial(5)
puts factorial(-5)


