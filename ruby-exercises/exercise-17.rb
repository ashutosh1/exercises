require 'time'
def sumtime (first_time, second_time)
  pattren = /^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/
  if first_time.match(pattren) && second_time.match(pattren)
    first_time = Time.parse(first_time)
    second_time = Time.parse(second_time)
    sum = first_time + (second_time.sec + (second_time.min * 60) + (second_time.hour * 60 * 60))
    "#{sum.day - first_time.day} day & #{sum.strftime('%H:%M:%S')}"
  else
    "Please enter the time in 'HH:MM:SS' format"
  end    
end
puts sumtime('22:12:34', '12:34:23')

