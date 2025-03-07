//* Data types define the type of values that a variable can hold.

//====> Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
// var myFavNum = -5;
// console.log(myFavNum);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
// var myName = 'vinod';
// console.log(myName);

//? Boolean: Represents a logical entity with two values: true or false.
// Example:
// var isRaining = false;
// var areYouAwesome = true;
// console.log(isRaining);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example:
// var vinod;
// console.log(vinod);

//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
// var badMemories = null;
// console.log(badMemories);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//==> 1: What is the difference between null and undefined in JavaScript?

// null: Imagine an Empty Box
// //* Explanation: Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.

// undefined: Imagine a Box That Wasn't Opened Yet
//* Explanation: Now, if we talk about undefined, it's like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or looked to see what's in it.
 

//==> 2: What is the purpose of typeof operator in JavaScript?

// var myName = 1;
// console.log(myName);
// console.log(typeof myName);

//? 3: What is the result of `typeof null` in JavaScript?
// var badMemories = null;
// console.log(badMemories);
// console.log(typeof null);

//? 4: What are primitive data types in JavaScript?

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
