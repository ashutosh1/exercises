class Array 
  def reverse_iterate
    yield self.reverse.join(' ')
  end
end
[2,4,6,8].reverse_iterate{|i| puts i}


