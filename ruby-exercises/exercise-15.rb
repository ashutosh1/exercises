puts "Enter the number till you want to list prime numbers."
num = gets.chomp.to_i
require 'prime'
def listing_prime_numbers_upto_entered_number(num)
  primes = [2]
  3.step(num, 1){|i| primes.push(i) if i.prime?}
  #(3..num).step(1){|i| primes.push(i) if i.prime?}
  primes.join(' ')
end
puts listing_prime_numbers_upto_entered_number(num)
