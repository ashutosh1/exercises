require 'time'
def sum (*times) 
  total_sec = 0
  times.each do |i|
    if i.match(/^([0-1][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/)
      time = Time.parse(i)
      total_sec += time.hour * 60 * 60 + time.min * 60  + time.sec 
    else
      puts "Please enter the time in 'HH:MM:SS' format"
      return false
    end
  end
  net_sec = total_sec % 60
  net_min = (total_sec / 60) % 60
  net_hr = (total_sec / 3600) % 24
  net_days = (total_sec / (3600 * 24)) % 24
  puts "#{net_days} day & #{net_hr}:#{net_min}:#{net_sec}"
end
sum("11:23:07","22:53:45","00:23:23","23:45:56")
