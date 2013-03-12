require 'prime'
def prime_number(num)
  primes = [2]
  3.step(num, 1){|i| primes.push(i) if i.prime?}
  #(3..num).step(1){|i| primes.push(i) if i.prime?}
  puts primes.join(' ')
end
prime_number(100)
