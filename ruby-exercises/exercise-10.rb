def pascal(n)
 return if n < 1 
 arr = [[1]]
 (n - 1).times do |i|
   arr << arr[i].inject([1]) {|res, elem| (arr[i].length == res.length) ? res << 1 : res << elem + arr[i][res.length]}
  end
  arr.each{|i| puts i.join("  ")}
end
pascal(6)

