class Array
  def power(n)
    collect{|elm| elm**n}
  end
end
print [2,3,4].power(3)
