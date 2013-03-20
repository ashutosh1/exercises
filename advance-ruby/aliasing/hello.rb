require_relative 'my_module'
class Hello
  extend MyModule
  def greet?
    puts 'hello'
  end
  def bye
    puts "bye"
  end
  chained_aliasing :greet?,:bye
end

say = Hello.new
say.greet?
say.greet_with_logger?
say.greet_without_logger?
say.bye
say.bye_with_logger
say.bye_without_logger

