 
 

 

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
// var myFavNum = "10";
// console.log(typeof +myFavNum);
// console.log(typeof Number(myFavNum));

//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:

// var str = 5;
// console.log(typeof str);

//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples?
//* In JavaScript, values are either considered "truthy" or "falsy" when evaluated in a boolean context.

//? Truthy values are treated as true when used in conditions. Examples include:
//  true ,Any non-empty string ("hello") ,Any non-zero number (42) ,Arrays and objects, even if they're not empty

// Falsy values are treated as false in boolean contexts. Examples include:
//  false ,0 (zero) , '' (an empty string) , null ,undefined ,NaN (Not a Number)

//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.
// var myName = -5;
// if (true) {
//   console.log("this is truthy value");
// } else {
//   console.log("its a falsy value");
// }


//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5


//==> Here are more examples
// console.log(parseInt("123"));
// // 123 (default base-10)
// console.log(parseInt("123", 10));
// // 123 (explicitly specify base-10)
// console.log(parseInt("   123 "));
// // 123 (whitespace is ignored)
// console.log(parseInt("077"));
// console.log(parseFloat("077"));
// // 77 (leading zeros are ignored)
// console.log(parseInt("1.9"));
// +console.log(parseFloat("1.9"));
// 1 (decimal part is truncated)

//! When we will not get an Output
// console.log(parseInt("&123"));
// console.log(parseInt("-123"));
// console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)


//? What is the purpose of the NaN value in JavaScript?
//? NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number.
//? Also, to check whether a value is number or not we can use isNaN() function.
// console.log(isNaN("vinod"));
// console.log(parseInt("xyz"));
// console.log(parseInt("@#$"));

// // NaN === NaN, Why is it false?
// if (NaN == NaN) {
//   console.log("both are equal ");
// } else {
//   console.log("not equal");
// }

//* ========== parseInt & parseFloat End Section ==========
