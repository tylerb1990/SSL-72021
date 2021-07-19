f = File.read("myfile.txt").split(" ")

f.each{
    |Line| puts Line
}

#Creates a file:
#File.write("secondFile.txt","test")