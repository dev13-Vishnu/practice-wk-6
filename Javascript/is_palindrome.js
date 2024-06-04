const readLine  = require('readline-sync');

let str = readLine.question("Enter a string :").toLowerCase();

let reversed = str.split("").reverse().join("");

if(str === reversed){
    console.log(" Entered string is a palindrome");
}else{
    console.log("The entered string is not a Palindrome");
}