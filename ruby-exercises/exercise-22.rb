class Array
  def reverse_iterate
    for i in (1..self.length)
      yield self[-i] 
    end
  end
end
[2,4,6,8].reverse_iterate{|i| puts i}

