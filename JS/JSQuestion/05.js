// Write a function that takes a string and returns the reversed version of it.

let str = "Hello World";
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString(str))

//split change string to array
//join change array to string
