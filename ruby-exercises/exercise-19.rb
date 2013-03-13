puts "Enter Principle Amount"
p = gets.chomp
puts "Enter The Duration"
t = gets.chomp
class Interest
  attr_accessor :t, :p
  def difference
    r = 10
  	amount_simple =  t*p*r/100
  	amount_compound = p * ((1 + (r/100.0))**t)
  	puts "diference is #{amount_compound - amount_simple}"
  end
end
obj = Interest.new.tap{|a| a.p, a.t = p.to_i, t.to_i}.difference
