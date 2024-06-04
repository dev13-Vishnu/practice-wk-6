const readLine = require('readline-sync');

const multiplicant = parseInt(readLine.question("Enter a number : "));

for(let i = 1;i<= 10;i++){
    console.log(i+' x '+multiplicant+' = '+i*multiplicant);
}