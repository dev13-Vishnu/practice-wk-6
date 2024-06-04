const readLine = require("readline-sync");

const mark = parseFloat(readLine.question("Enter the mark you've scoered :"));

if(mark>=50){
    console.log("Passed");
}else{
    console.log("failed")
}