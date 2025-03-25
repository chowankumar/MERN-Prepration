//write the function which take the string and return longest word.

const returnLongestWord = (str)=> {
    if(str.trim().length == 0) return false

    const largestWord = str.split(" ");
    largestWord.sort((a,b) => a.length-b.length)
    return largestWord.at(-1)

}
console.log(returnLongestWord("this is chowan malhani"))

//a.length-b.length ascending order
//b.length-a.length  descending order


//REDUCE METHOD
const returnLongestWord2 = (str)=> {
    if(str.trim().length == 0) return false

    return str.split(" ").reduce((accum,curr) => (curr.length > accum.length ? curr : ""))

}
console.log(returnLongestWord2("this is chowan malhani"))
