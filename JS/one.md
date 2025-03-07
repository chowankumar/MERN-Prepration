# JS 
js is used to imporove behaviour of web page.   
* add js

    * inline ```<button onlcick = "alert('hello')">click me </buttton>```
    * Internal : ```<script> js </script>```
    * External : ```<script src="script.js"></script>```
# Value  
A value is a piece of information that a program can work with. It can be a number, text, true/false, or more complex data.
# Variables: 
A variable is a container that holds a value. It has a name and can be used to store and manipulate data in a program.  
var myAge = 30   
console.log(myAge)

# Data types  
* Number: Represents numeric values, including integers and floating-point numbers.  
```
var myFavNum = -5;  
console.log(myFavNum);
```

* String: Represents a sequence of characters enclosed in single or double quotes.    
 var myName = 'vinod';  
 console.log(myName);

* Boolean: Represents a logical entity with two values: true or false.  
 var isRaining = false;  
 var areYouAwesome = true;  
 console.log(isRaining);

* undefined: Represents the absence of a value or an uninitialized variable.  
 var vinod;  
 console.log(vinod);

* Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.  
 var badMemories = null;  
 console.log(badMemories);  

* BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).    
const bigNumber = 1234567890123456789012345678901234567890n;  

* Symbol: Represents a unique and immutable data type, often used to create unique identifiers.  
 const mySymbol = Symbol("description");  

####   Key Concepts :   
* Null is an Empty Box.Think of a variable as a box. When we say a box has null inside, it's like having an empty box. The box exists, but there's nothing valuable or meaningful inside it.
* Undefined is a Box That Wasn't Opened YetNow, if we talk about undefined, it's like having a box that you haven't opened yet. You know the box is there, but you haven't put anything inside or looked to see what's in it.   
* Type of null is object
*  We just need to add the '+' sign before the string.  
```js 
var myFavNum = "10";
console.log(typeof +myFavNum);
console.log(typeof Number(myFavNum));
```

* We just need to add an empty string after the number
```js
  var str = 5;
  console.log(typeof str + "");
   ```
* values are either considered "truthy"[true ,Any non-empty string ("hello") ,Any non-zero number (42) ,Arrays and objects]  
 "falsy" when evaluated in a boolean context.[ false ,0 (zero) , '' (an empty string) , null ,undefined ,NaN (Not a Number) ]



* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
```js 
const myString = "42";
const myNumber = parseInt(myString);
console.log(myNumber); // Output: 42 

 const myString = "42.5";
 const myNumber = parseInt(myString);
 console.log(myNumber); // Output: 42
```


* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
```js
 const myString = "42.5";
 const myNumber = parseFloat(myString);
 console.log(myNumber); // Output: 42.5



 
console.log(parseInt("123"));
 // 123 (default base-10)
 console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
 // 123 (whitespace is ignored)
console.log(parseInt("077"));
console.log(parseFloat("077"));
 // 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// +console.log(parseFloat("1.9"));
// 1 (decimal part is truncated)

// When we will not get an Output
 console.log(parseInt("&123"));
 console.log(parseInt("-123"));
 console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer) 
```

* NaN stands for "Not a Number" and is returned when a mathematical operation doesn't yield a valid number. Also, to check whether a value is number or not we can use isNaN() function.
```js
 console.log(isNaN("vinod"));
 console.log(parseInt("xyz"));
 console.log(parseInt("@#$"));
```

* NaN === NaN returns false in JavaScript is that NaN (Not a Number) is a special value that is not considered equal to any other value, even to itself. This is part of the IEEE 754 standard








