//Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".
function sevenBoom(arr){

    for(const num of arr){
        if(num.toString().includes("7")){
            return "Boom!";
        }
    }
    return "there is no 7 in this ARRAY"

}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 0]));