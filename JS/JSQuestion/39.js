// Destructure an object to get its properties.
const person = {
    fName:'John',
    lName:'Doe',
    age:20,
    city:'New York'
}

console.log(person);

const {fName,lName,...left} = person;

console.log(fName)
console.log(lName);
console.log(left)