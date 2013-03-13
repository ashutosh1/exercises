require 'csv'
hash = Hash.new(Array.new)
CSV.open('a.csv','w') do |csv|
  CSV.foreach("/opt/exercises/ruby-exercises/csv-exercise/info.csv") do |line|
    hash[line[2]] += [line[0] + '(Empid: ' + line[1] + ')']
  end
  hash.each do|key,val|
    csv.add_row([key + ' :'])
    val.each{|v| csv << [v]}
    csv.puts([])
  end 
end
