import sys

# Collect information
name = raw_input("What is your name? ")
assignment = raw_input("What is the name of your assignment? ")
grade = raw_input("What percent did you recieve on your assignment? ")


# Return information
print(name + "@fullsail.edu")

# Check entered grade and return
if grade < 60:
    print("Here is your grade for " + assignment + ": F")
elif grade >= 60:
    print("Here is your grade for " + assignment + ": D")
elif grade >= 70:
    print("Here is your grade for " + assignment + ": C")
elif grade >= 80:
    print("Here is your grade for " + assignment + ": B")
elif grade >= 90:
    print("Here is your grade for " + assignment + ": A")
else:
    print("Here is your grade for " + assignment + ": A valid grade was not entered")