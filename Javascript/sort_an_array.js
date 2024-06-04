const readLine = require('readline-sync');

let arr =[];

let size = parseInt(readLine.question("Enter the size of the array:"));

console.log("Enter the elements in the array \n");
for(let i =0;i<size;i++){
    arr[i] = readLine.question("");
}

arr.sort((a,b)=>b-a);

console.log("the array after sorting :"+arr);