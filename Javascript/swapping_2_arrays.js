const readLIne = require ('readline-sync');

const limit = parseInt(readLIne.question("Enter the size of the arrays : "));


let array1 =[];
let array2 =[];

console.log("Enter the elements of the first array: ");;

for (let i =0;i < limit; i++){
    array1[i] = readLIne.question('');
}

console.log('Enter the elements of the second array: ');
for(let i = 0;i<limit;i++){
    array2[i] = readLIne.question('');
}

for(let i = 0;i <limit;i++){
    let temp =0;
    temp = array1[i];
    array1[i]= array2[i];
    array2[i]= temp;

}

console.log("the Arrays after swapping \n Array1 : ");

array1.forEach(element => {
    process.stdout.write(`${element},`);
});

console.log("\nArray 2 :");
array2.forEach(element => {
    process.stdout.write(`${element},`);
});

