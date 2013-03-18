def count_char (str)
  upper , lower , digit = 0 , 0 , 0
  str.split('').each do |char|
    upper += 1 if ('A'..'Z').include?(char)
    lower += 1 if ('a'..'z').include?(char)
    digit += 1 if ('0'..'9').include?(char)
  end
  special = str.length - (upper + lower + digit)
  ['upper','lower','digit','special'].each{|i| puts "Number of #{i} #{i == 'digit' ? '' : 'case'} charchters: #{eval(i)}"}
end
count_char("SAM123@vinsol$6547A%Sd78*&^ASbfg1")

#def count_char (str)
#  upper = str.scan(/[A-Z]/).count
#  lower = str.scan(/[a-z]/).count
#  digit = str.scan(/[0-9]/).count
#  special = str.length - (upper + lower + digit)
#  ['upper','lower','digit','special'].each{|i| puts "Number of #{i} #{i == 'digit' ? '' : 'case'} charchters: #{eval(i)}"}
#end
#count_char("SAM123@vinsol$6547A%Sd78*&^ASbfg1")

