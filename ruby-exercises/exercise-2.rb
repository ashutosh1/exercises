def fib(n)
  prv = 0
  nxt = 1
  while prv <= n.to_i
    yield prv
    prv, nxt = nxt, prv + nxt
  end
end
fib(1000){|val| print "#{val} "}


