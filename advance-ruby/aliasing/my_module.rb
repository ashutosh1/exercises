module MyModule
  def chained_aliasing(*args) 
    class_eval {
      args.each do |val|
        if (val.to_s.end_with?("?","!"))
          exclamation = val.to_s.split("").last
          method_name = "#{val}".to_sym
          name_without_exclamation = val.to_s.chomp(exclamation)
          alias_method_name = "alias#{name_without_exclamation}"
          with_logger = "#{name_without_exclamation}_with_logger#{exclamation}"
          without_logger = "#{name_without_exclamation}_without_logger#{exclamation}"
        else
          alias_method_name = "alias#{val}"
          method_name = "#{val}".to_sym
          with_logger = "#{val}_with_logger"
          without_logger = "#{val}_without_logger"
        end 
        alias_method alias_method_name, method_name
        define_method(with_logger) {
          puts '--logging start'
          send(alias_method_name)
          puts '--logging end'
          puts 
        }
        define_method(without_logger) { send(alias_method_name);puts }
        define_method("#{val}") { send(with_logger) }
      end
    }
  end
end

