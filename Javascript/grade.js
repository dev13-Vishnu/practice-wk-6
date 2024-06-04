 const readLIne  = require('readline-sync');

 const mark = parseFloat(readLIne.question("Enter total mark you've scored: "));

 if(mark>90){
    console.log("Congratulations, Your grade is 'A'");
 }else if(mark>=80){
    console.log("Congratulation, Your grade is 'B'");
 }else if(mark>=70){
    console.log("Congratulations, Your grade is 'C'");
 }else if(mark>=60){
    console.log("Congratulations, Your grade is 'D'");
 }else if (mark>=50){
    console.log("Congratulations, Your grade is 'E'");
 }else{
    console.log("Failed");
 }