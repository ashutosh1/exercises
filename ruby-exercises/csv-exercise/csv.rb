require 'csv'
information = Hash.new(Array.new)
CSV.open('new_info.csv','w') do |csv|
  CSV.foreach(File.expand_path('info.csv')) do |line|
    information[line[2]] += [line[0] + ' (Empid: ' + line[1] + ')']
  end
  information.sort.each do|key,val|
    csv.add_row([key + ':'])
    val.each{|v| csv << [v]}
    csv.puts([])
  end 
end
