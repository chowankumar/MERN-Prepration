//Write a function that takes an array of numbers and returns a new array with only the even numbers.

let arr = [10,15,20,25,30,35,40];
function filterEvenNumber(arr){
    return arr.filter(num => num %2 ===0);
}

console.log(filterEvenNumber(arr));
console.log(arr)