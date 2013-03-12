def count_char (str)
  upper, digit ,lower, special = 0,0,0,0
  str.split('').each do |s|
	  if (('A'..'Z').include?(s))
	    upper += 1
	  elsif (('a'..'z').include?(s))
		  lower += 1
    elsif (('0'..'9').include?(s))
	    digit += 1
	  else 
		  special += 1
	  end    
  end
  ['upper','lower','digit','special'].each{|i| puts "Number of #{i} #{i == 'digit' ? '' : 'case'} charchters: #{eval(i)}"}
end
count_char("SAM123@vinsol#$6547A%Sd78*&^ASbfg1")
