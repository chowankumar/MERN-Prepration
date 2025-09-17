function createCounter(){
var count = 0;

return function(){
    return ++count
}}

const count = createCounter()
console.log(count())
console.log(count())