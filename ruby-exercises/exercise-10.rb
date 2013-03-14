class Pascal 
  def pascal(m)
    m.times do |i|
      k = 0 
      while (k < i+1)
        yield(fact(i)/(fact(k)*fact(i-k)))
        k += 1
      end
     yield true 
    end
  end

  def fact(n)
    return "Please enter number greater than zero" if n < 0
    n <= 1 ? 1 : n * fact(n-1)  
  end
end
#using yield ones for each row and then calling newline before next row starts
Pascal.new.pascal(6) {|r| print r== true ? "\n" : "#{r} "}
