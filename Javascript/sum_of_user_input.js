const readLine = require ("readline-sync");

const num1 = parseFloat(readLine.question('Enter the firs number: '));

const num2 = parseFloat(readLine.question('Enter the second number: '));

const sum = num1+ num2;
console.log("The sum is : " +sum);