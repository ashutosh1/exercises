puts "Enter the number till you want to list prime numbers."
num = gets.chomp.to_i
require 'prime'
def print_prime_numbers(num)
  primes = [2]
  3.step(num, 1){|i| primes.push(i) if i.prime?}
  #(3..num).step(1){|i| primes.push(i) if i.prime?}
  primes.join(' ')
end
puts print_prime_numbers(num)
