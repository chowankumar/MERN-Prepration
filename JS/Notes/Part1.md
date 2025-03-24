# JS 
js is used to imporove behaviour of web page.   
* add js

    * inline ``` <button onlcick = "alert('hello')">click me </buttton>```
    * Internal : ``` <script> js </script>```
    * External : ``` <script src="script.js"></script>```
    

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

* NaN === NaN returns false in JavaScript is that NaN (Not a Number) is a special value that is not considered equal to any other value, even to itself. This is part of the IEEE 754 standard.


# Concatenation 
* In JavaScript, the + sign is not only used for arithmetic addition but also for string concatenation. When the + operator is used with strings, it concatenates the strings together
* if any operand of the + operator is a string, JavaScript will treat the other operands as strings as well, resulting in string concatenation. If both operands are numbers, the + operator performs numeric addition.
 #### Type coercion
 automatic conversion of "values" from one data type to another  
* There are two types of coercion in JavaScript: implicit and explicit. Implicit coercion happens automatically, while explicit coercion is done manually by the programmer.

#### Questions

```js
console.log(10 + "20");  // Number 10 is coerced into a string, resulting in "1020".

console.log(9 - "5");    // String "5" is coerced into a number, so 9 - 5 = 4.

console.log("Java" + "Script");  // "JavaScript"
console.log(" " + " ");  // "  "

let sum = " " + 0;
console.log(typeof sum);  //The empty string " " is coerced into a string, resulting in " 0", and its type is "string".

console.log("vinod" - "thapa");  // NaN (Not a Number)

console.log(true + true);   // 1 + 1 = 2
console.log(true + false);  // 1 + 0 = 1
console.log(false + true);  // 0 + 1 = 1
console.log(false - true);  // 0 - 1 = -1
```

# EXPRESSIONS AND OPERATORS
#### Types of Operators
1.  Assignment operators : in programming are symbols used to assign values to variables. They take the value on the right side of the operator and assign it to the variable on the left side.
 ```js
var myFavNum = 15;
//Assigns the value 15 to the variable myFavNum
var channelName = 'thapa tecnical'
```
2.  Arithmetic operators in programming perform basic mathematical operations on variables or values. They include addition, subtraction, multiplication, division, and modulus.

 * Addition (+): Adds two values or variables.
```js
  var x = 5;
  var y = 10;
  var sum = x + y;
  console.log(sum);
```  
* Subtraction (-): Subtracts the right operand from the left operand.
 ```js
 var a = 10;
 var b = 7;
var difference = a - b;
 console.log(difference);
```

* Multiplication (*): Multiplies two values or variables.
```js
 var p = 4;
 var q = 6;
 var product = p * q;
 console.log(product);
```

* Division (/): Divides the left operand by the right operand.
```js
var m = 15;
var n = 3;
var quotient = m / n;
console.log(quotient);
```

* Modulus (%): Returns the remainder when the left operand is divided by the right operand.
```js
var c = 17;
var d = 5;
var remainder = c % d;
console.log(remainder);
```


3. Comparison operators in JavaScript are used to compare values and return a Boolean result (true or false).

* Equal (==):Checks if two values are equal, performing type coercion if necessary.  

* Strict Equal (===):
Checks if two values are equal without performing type coercion.  

* Not Equal (!=  ! =):
 Checks if two values are not equal, performing type coercion if necessary.  
* Greater Than (>): Checks if the value on the left is greater than the value on the right. 
* Less Than (<):
 Checks if the value on the left is less than the value on the right.
* Greater Than or Equal To (>=):
 Checks if the value on the left is greater than or equal to the value on the right.
* Less Than or Equal To (<=):
 Checks if the value on the left is less than or equal to the value on the right.
 ```js
  console.log(5 == "5");
  console.log(5 === "5");
  console.log(5 < 10);
  console.log(5 != 5);
  console.log(5 > 2);
  console.log(10 <= 10);
  console.log(5 >= 10);
 ```
4. String Operators There are a few ways to concatenate strings in JavaScript. The most common way is to use the + operator. For example, to concatenate the strings "Hello" and "World", you would use the following code:

```js
 var str1 = "Hello";
 var str2 = "World ";
 var str3 = str1 + Str2;
 console.log(str3);
 ```

5. Logical operators in JavaScript  
* Logical AND (&&): Returns true if both operands are true, otherwise, it returns false.
* Logical OR (||): Returns true if at least one of the operands is true, otherwise, it returns false.
* Logical NOT (!):
 Returns true if the operand is false, and false if the operand is true

```js
var x = 5;
var y = 10;
console.log(x > 0 && y < 0);

var a = 15;
var b = 0;
console.log(a > 10 || b > 10);

var isOpen = false;
console.log(!isOpen)//true

```

6. Unary operators in JavaScript are operators that work with only one operand. They perform various operations such as negation, incrementing, decrementing, type conversion, and more.
*  Unary Plus (+): Converts its operand into a number. If the operand is not already a number, it attempts to convert it.
* Unary Negation (-): Negates its operand, converting non-numbers into numbers and then negating them.

* Prefix Increment (++x) and Prefix Decrement (--x): In prefix form, the value of the operand is first incremented or decremented, and then the result is returned.

* Postfix Increment (x++) and Postfix Decrement (x--): In postfix form, the value of the operand is first returned, and then it is incremented or decremented.


```js
 console.log(+3);
 console.log(+"5");

 console.log(-5);
 console.log(-"3");

 var x = 5;
 var y = --x;
 console.log(y);
 console.log(x);

 var x = 5;
 var y = x++;
 console.log(y);
 console.log(x);
```
7. Conditional (ternary) operator
* syntax: condition ? expressionIfTrue : expressionIfFalse;


#### Questions
1. What will be the Output?

```js
var result = "hello" / 2;
console.log(result); //Nan

var result = 0.1 + 0.2;
console.log(result.toFixed(2));//0.30

var result = 55 * "hello";
console.log(result);//NaN

console.log("5" + 3);  // Outputs "53" 

console.log(typeof ("5" - 3)); // "number" "5" is a string, but the - operator triggers type coercion and converts "5" into a number.

console.log(2 < 12 < 5); // 2 < 12 true / true means 1 now | 1 < 5 > true 

console.log("20" + 10 + 10);//20+"10" = "2010" + 10 = "202010"
```

# Functions
* a function is a block of reusable code that performs a specific task or set of tasks.
* Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
* Function Invocation  Calling a Function.
* Anonymous Function without name
* Function expressions   is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression. 
* Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller
* IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately
* First class funtion/Citizens : ability of function to used as values and passed as arguments and return from the function

```js
//declare a function
function greet() {
  console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
}
greet() //invoke

//Anonymous
var result = function(a,b){
  a+b;
}

///expression
var result = function sum(a, b) {
  console.log(a + b);
};

result(10, 15);

//IIFE
(function () {
  // code to be executed
})();

//first order func:
const greet = function() {
    console.log("Hello, world!");
};

greet();  
function outerFunction() {
    return function() {
        console.log("I am returned from another function!");
    };
}

const newFunc = outerFunction();
newFunc()
```






