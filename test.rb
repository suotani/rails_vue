loop do
  puts "input text:"
  text = gets.to_s.chomp
  if text == 'exit'
    break
  else
    puts "input: #{text}"
  end
end
