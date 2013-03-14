puts "Enter Principle Amount"
principle = gets.chomp
puts "Enter The Duration"
time = gets.chomp
class Interest
  attr_accessor :time, :principle
  def difference
    rate = 10.0
  	amount_simple =  time * principle * rate / 100
  	amount_compound = principle * ((1 + (rate/100)) ** time)
  	puts "diference is #{(amount_compound - amount_simple).round(2)}"
  end
end
Interest.new.tap{|obj| obj.principle, obj.time = principle.to_i, time.to_i}.difference
