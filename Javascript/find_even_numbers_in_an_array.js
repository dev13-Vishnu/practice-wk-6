let array = [11, 20, 34, 50, 33];

let count = 0;

array.forEach(element => {
    if(element%2===0){
     count ++;
    }
});
console.log("Number of even numbers in the array is :"+count);