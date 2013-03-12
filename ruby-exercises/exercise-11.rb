class Array
  def make_hash
    hash = Hash.new(Array.new)
    value = self.inject({}) do|res,elm|
      res.has_key?(elm.to_s.length.to_i) ? res[elm.to_s.length.to_i].push(elm) : res[elm.to_s.length.to_i] = [elm]
      res 
    end  
    value.inject(0) do|res,(k,v)|
      key = k.odd? ? "odd" : "even" 
      hash[key] += [v]
    end
    puts hash
  end
end  
['abc','def',1234,234,'abcd','x','mnop',5,'zZzZ','xyxyxy','vinsol'].make_hash


 
