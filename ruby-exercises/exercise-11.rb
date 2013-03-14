def make_hash(array)
  values = Hash.new(Array.new)
  result = Hash.new(Array.new)
  for elm in array
    values[elm.to_s.length] += [elm.to_s]
  end
  values.inject(0) do|res,(k,v)|
    key = k.odd? ? "odd" : "even" 
    result[key] += [v]
  end
  return result
end

puts make_hash(['abc','def',1234,234,'abcd','x','mnop',5,'zZzZ','xyxyxy','vinsol'])


 
