require 'time'
def sumtime (t1, t2)
  if t1.match(/^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/) && t2.match(/^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/)
    first_time = Time.parse(t1)
    second_time = Time.parse(t2)
    sum = first_time + (second_time.sec + (second_time.min*60) + (second_time.hour*60*60))
    puts "#{sum.day - first_time.day} day & #{sum.to_s.slice(/[0-9][0-9]?:[0-9][0-9]?:[0-9][0-9]?/)}"
  else
    puts "Please enter the time in 'HH:MM:SS' format"
  end    
end
sumtime('22:12:34', '12:34:23')

