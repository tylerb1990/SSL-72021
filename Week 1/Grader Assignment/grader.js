const readLine = require("readline");

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

// Ask first question - name
rl.question("What is your first name? ", (name)=>{

    rl.question("What is the name of your assignment? ", (assignment)=>{

        rl.question("What percent did you recieve on your assignment? ", (grade)=>{

            // Return entered information
            console.log(name + "@fullsail.edu")
            
            // Check entered grade and return
            if(!isNaN(grade) && (grade >= 0 || grade <= 100)){
                if(grade >= 90){
                    console.log("Here is your grade for " + assignment + ": A")
                }
                else if(grade >= 80){
                    console.log("Here is your grade for " + assignment + ": B")
                }
                else if(grade >= 70){
                    console.log("Here is your grade for " + assignment + ": C")
                }
                else if(grade >= 60){
                    console.log("Here is your grade for " + assignment + ": D")
                }
                else if(grade < 60){
                    console.log("Here is your grade for " + assignment + ": F")
                }
            }

            else{
                console.log("Here is your grade for " + assignment + ": A valid grade was not entered.")
            }
            
            // Close node
            rl.close()
        })
    })
})