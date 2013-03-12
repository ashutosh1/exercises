#Overwriting reverse method of string class
class String
  def reverse
    puts self.split.reverse().join(' ')
  end
end
"An apple a day keeps the doctor away".reverse


