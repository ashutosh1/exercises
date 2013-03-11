def fib(n)
  prv = 0
  nxt = 1
  while prv <= n.to_i
    puts prv
    prv, nxt = nxt, prv + nxt
  end
end
fib(1000)
#to give the value as command line argument
#fib(ARGV[0])


