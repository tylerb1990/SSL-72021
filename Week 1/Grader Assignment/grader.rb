# Gather information
puts "What is your name? "
name = gets

puts "What is the name of your assignment? "
assignment = gets

puts "What percent did you recieve on your assignment? "
grade = gets

# Return email
puts name+"@fullsail.edu"

# Return letter grade
if grade.to_i < 60
    puts "Here is your grade for "+assignment+": F"
elsif grade.to_i  >= 60
    puts "Here is your grade for "+assignment+": D"
elsif grade.to_i  >= 70
    puts "Here is your grade for "+assignment+": C"
elsif grade.to_i  >= 80
    puts "Here is your grade for "+assignment+": B"
elsif grade.to_i >= 90
    puts "Here is your grade for "+assignment+": A"
else
    puts "Here is your grade for "+assignment+":A valid grade was not entered"
end