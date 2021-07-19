import sys

name = raw_input("What is your name? ")

print("Hello, " + name)

f = open("myfile.txt","a")
f.write("This is some text. Created by: " + name)
f.close()
