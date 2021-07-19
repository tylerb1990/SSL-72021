// Read files
var fs = require("fs");

fs.readFile("myfile.txt","utf8",function(err, contents){
    // console.log(err)
    console.log(contents)
});


// Write files
fs.writeFile("myfile.txt", "utf8", function(err){
    console.log(err)
    console.log("done")
})


// New library
const readLine = require("readline");

const rl = fs.readLine.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("What is your name?", (name)=>{
    rl.question("What is your favorite color",(color)=>{
        console.log(name+" your favorite color is "+color)
        rl.close()
    })
})