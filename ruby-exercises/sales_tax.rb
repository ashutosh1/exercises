class Items
  def list  
    items = {}
    begin
      print "Name of the product: "
      name = gets.strip
      print "Imported?(y/n): "
      imported = gets.strip
      print "Exempted from sales tax?(y/n): "
      exmpted = gets.strip
      print "Price: "
      price = gets.strip.to_i
      print "Do you want to add more items to your list(y/n): "
      add_more = gets.strip
      items[name] = [name,imported,exmpted,price]
    end until add_more.strip.downcase == "n"
    items
  end
end  

class SalesTaxs 
  def calculate(items)
    first, grand_total = true, 0
    obj_display = Displays.new
    items.each do|key,val|
      item = items[key]
      item[1].downcase == "y" ? imp_duty = (item[3] * 5.0/100.0).round(2) : imp_duty = 0
      item[2].downcase == "y" ? sale_tax = 0 : sale_tax = (item[3] * 10.0/100.0).round(2) 
      item[3] = (item[3] + imp_duty + sale_tax).round
      grand_total += item[3]
      obj_display.display(item,first) 
      first = false
    end
    DisplayGrandTotal.new.show_grand_total(grand_total)
  end
end

class Displays 
  def display(item,first)
    if(first) 
      puts "--------------------------------------------------------------------------"
      puts ['Product','Imported','Exmpted','Price'].join("       |       ")
      puts "--------------------------------------------------------------------------"
    end  
    print sprintf("%15.15s","#{item[0]} |")
    print sprintf("%23.23s","#{item[1]} |")
    print sprintf("%22.22s","#{item[2]} |")
    print sprintf("%15.15s","#{item[3]} \n")
    puts "--------------------------------------------------------------------------"
  end
end 

class DisplayGrandTotal
  def show_grand_total(total)
    puts "Grand Total: #{total}"
    puts "--------------------------------------------------------------------------"
  end
end

class Master
  def invoke_all_methods
    items = Items.new.list
    SalesTaxs.new.calculate(items)
  end
end
#Invoking list method of items class and calculate method of sales tax class
Master.new.invoke_all_methods

