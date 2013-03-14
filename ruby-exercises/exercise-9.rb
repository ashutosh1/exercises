class Array
  def make_hash
    hash = Hash.new(Array.new)
    for elm in self
      hash[elm.to_s.length] += [elm.to_s]
    end
    return hash
  end
end

puts ["123","asdf","342142","asd","1245","sadaasfsa","asdasda"].make_hash

