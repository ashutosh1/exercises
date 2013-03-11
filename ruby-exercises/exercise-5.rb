class Customer 
  @@account_no = 0
  def initialize (name, balance=1000)
    @name = name
    @balance = balance
    @account_no = (@@account_no += 1)
    puts "#{@name}'s opening balance is #{@balance} in account #{@account_no}"
  end

  def deposit (amount)
    @balance += amount
   	puts "Amount #{amount} has been deposited in #{@name}'s account. Now your balnce is #{@balance}"
  end

  def withdrawal (amount)
   	@balance -= amount
   	puts "Amount #{amount} has been withdrawn from #{@name}'s account. Now your balnce is #{@balance}"
  end
end
customer1 = Customer.new("Ashutosh")
customer2 = Customer.new("Jhon")
customer1.deposit(1000)
customer1.withdrawal(500)
