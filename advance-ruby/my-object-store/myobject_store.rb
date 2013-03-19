module MyObjectStore
  @@objects = []
  def self.included(base)
    base.class_eval{
      def save
        if (self.respond_to?('validate'))
          begin 
            validate
            @@objects << self
            puts "Object Saved"
          rescue Exception => e
            puts "Error: Object Could Not Saved Because #{e.message}"
            e.set_backtrace(e.message)
          end
        else
          @@objects << self
          puts "object saved"
        end
    end }
  base.instance_eval {   
    def collect
      @@objects.collect
    end

    def count
      @@objects.count 
    end

    accessor_methods = (self.instance_methods - Object.methods).collect{|val| val unless val.to_s.include?("=")}.compact
    accessor_methods.each do |val|
      eval "def find_by_#{val} (parameter) 
              match_result = []
              @@objects.each{|obj| match_result << obj if obj.send('#{val}') == parameter}
              return match_result.each
            end"  
    end}
  end
end

