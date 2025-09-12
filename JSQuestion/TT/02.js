//create function which take the string that generate hashtag.

//each word capatilized and concated without space.
//length greater than 280 or empty return false


const generateHash = (str) =>{
    if(str.trim().length === 0 || str.trim().length > 280) return false;

    var hashTag = str.split(" ");
    hashTag = hashTag.map((curr)=>
        curr.replace(curr[0],curr[0].toUpperCase())).join("")
    
     return "#"+hashTag
     
     
     
}
console.log(generateHash("this is chowan"))

//solution 2

const generateHash2 = (str) =>{
    if(str.trim().length === 0 || str.trim().length > 280) return false;

    var hashTag = str.split(" ");
    hashTag = hashTag.map((curr)=>
        curr.charAt(0).toUpperCase() + curr.slice(1)).join("")
    
     return "#"+hashTag
     
     
     
}
console.log("================ solution 2 =================")
console.log(generateHash2("this is chowan"))