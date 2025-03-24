//Create an object `person` with properties like name and age. Then, create a new object `student` that inherits from `person` and has an additional property `studentId`.Add a method to the `person` object and demonstrate that `student` also has access to it.
const person = {
    name:"Zayn",
    age:20,

    introduce:function(){
        return `Hi my name is ${this.name} and i m ${this.age} year old`
    }
}

const student = Object.create(person);
student.studentId= '12345';


console.log(student.name)
console.log(student.studentId);

console.log(person);

console.log(student.introduce())

