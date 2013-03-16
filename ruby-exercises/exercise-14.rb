def count_char (str)
  upper = str.scan(/[A-Z]/).count
  lower = str.scan(/[a-z]/).count
  digit = str.scan(/[0-9]/).count
  special = str.length - (upper + lower + digit)
  ['upper','lower','digit','special'].each{|i| puts "Number of #{i} #{i == 'digit' ? '' : 'case'} charchters: #{eval(i)}"}
end
count_char("SAM123@vinsol#$6547A%Sd78*&^ASbfg1")
