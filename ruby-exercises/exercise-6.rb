class Vehicle
  def initialize (name, price)
    @name = name
    @price = price
  end

  def show
    puts "#{@name} has a price of #{@price}"
  end
  attr_accessor :price
end

class Bike < Vehicle
  def initialize (dealer,name,price)
    @dealer = dealer
    super(name,price)
  end
#  attr_accessor :dealer
  def show
    puts "bike: #{@name} dealer: #{@dealer} price: #{@price}"
  end  
end

bike = Bike.new("Ashutosh", "Hayabusa", 100000)
bike.show
bike.price = 120000
bike.show

