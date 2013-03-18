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
    @grand_total = 0
    obj_display = Displays.new
    obj_display.display_header
    items.each do|key,val|
      item = items[key]
      item[1].downcase == "y" ? imp_duty = (item[3] * 5.0/100.0).round(2) : imp_duty = 0
      item[2].downcase == "y" ? sale_tax = 0 : sale_tax = (item[3] * 10.0/100.0).round(2) 
      item[3] = (item[3] + imp_duty + sale_tax).round
      @grand_total += item[3]
      obj_display.display(item) 
    end
  end

  def read_grand_total
    DisplayGrandTotal.new.show_grand_total(@grand_total)
  end
end

class Displays 
  def display_header
    puts "----------------------------------------------------------------------------------"
    ['Product','Imported','Exmpted','Price'].each{|itm| printf("%20.20s","#{itm} |")}
    puts 
    puts "----------------------------------------------------------------------------------"
  end  
  
  def display(item)
    item.each{|itm| printf("%20.20s","#{itm} |")}
    puts
    puts "----------------------------------------------------------------------------------"
  end
end 

class DisplayGrandTotal
  def show_grand_total(total)
    puts "Grand Total: #{total}"
    puts "----------------------------------------------------------------------------------"
  end
end

class Master
  def invoke_list_methods
    @items = Items.new.list
  end

  def invoke_claculate_method
    SalesTaxs.new.calculate(@items)
  end
end
#Invoking list method of items class and calculate method of sales tax class
obj = Master.new
obj.invoke_list_methods
obj.invoke_claculate_method

