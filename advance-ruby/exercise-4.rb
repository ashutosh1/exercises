$products = {}
class ShoppingList
  #block.call will execute the add method in context of main
  def items(&block)
    block.call
  end
end

#The method is in context of main.
def add(product_name,quantity)
  $products[product_name] = quantity
  $products
end

sl = ShoppingList.new
sl.items do
  puts add("Toothpaste",2)
  puts add("Computer",1)
end
