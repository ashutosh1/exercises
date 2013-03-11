class Array
  def make_hash
    hash = {}
    for elm in self
      hash.has_key?(elm.length.to_s) ? hash[elm.length.to_s].push(elm) : hash[elm.length.to_s] = [elm]
    end
    return hash
  end
end

puts ["123","asdf","342142","asd","1245","sadaasfsa","asdasda"].make_hash
