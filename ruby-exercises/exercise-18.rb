require 'time'
def sum (*time)
  sum , times = 0,[]
  time.each do |i|
    if i.match(/^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/)
      times.push(Time.parse(i))
    else
      puts "Please enter the time in 'HH:MM:SS' format"
      return false
    end
  end
  for i in 1..times.length-1
    sum += times[i].hour*60*60 + times[i].min*60+ times[i].sec 
  end 
  total_sum = times[0] + sum 
  days = total_sum.day - times[0].day
  puts "#{days} day & #{total_sum.to_s.slice(/([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])/)}"
end
sum('22:40:40', '22:30:30','10:44:56','21:34:36')
