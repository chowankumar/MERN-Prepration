//Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

function fraction(numerator,denominator){
const res = numerator/denominator;
return res.toString();
}

console.log(typeof fraction(1,2));