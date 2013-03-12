#Using yield and !n/(!k * (!n-k)) method to evaluate each value of pascal tringal
#Use yield true to avoid puts and in that case compare the value in block
class Pascal 
  def pas(m)
    for i in 0..m
      k = 0 
      while (k < i+1)
        yield(fact(i)/(fact(k)*fact(i-k)))
        k += 1
      end
     yield true #we can use puts also ,in that case no need to check the value of r,we can just print the result
    end
  end

  def fact(n)
    exit(0) if n < 0
    return 1 if n <=1
    (2..n).inject {|s,i| s *= i}
  end
end
obj = Pascal.new 
#using yield ones for each row and then calling newline before next row starts
obj.pas(6) {|r| print r== true ? "\n" : "#{r} "}



#def pascal(n)
# return if n < 1 
# arr = [[1]]
# (n - 1).times do |i|
#   arr << arr[i].inject([1]) {|res, elem| (arr[i].length == res.length) ? res << 1 : res << elem + arr[i][res.length]}
#  end
#  arr.each{|i| puts i.join("  ")}
#end
#pascal(6)

