const readLIne = require('readline-sync');

const limit = parseInt(readLIne.question("Enter limit : "))
let sum = 0;

for (let i = 0;i <= limit ;i++){
    if(i % 2 == 1){
        sum += i;
    }
}
console.log(sum);