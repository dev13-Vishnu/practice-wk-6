const readLine = require('readline-sync');

const principleAmount = parseInt(readLine.question("Enter the principel Amount : "));

const interestRate = parseFloat(readLine.question("Enter the Interest Rate : "));

const numberOfYears = parseFloat(readLine.question("Enter the number or years : "));

const simpleInterest = (principleAmount*interestRate*numberOfYears)/100;

console.log(typeof(simpleInterest))
console.log( "You're interest is :"+simpleInterest);