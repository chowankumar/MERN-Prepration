// Strings in JavaScript are a fundamental data type that represents a sequence of characters.Strings created with single or double quotes works the same.


//=> length: Property that returns the length of the string (number of characters).

// const str = "Hello,    World!";
// console.log(str.length);


//=> Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash


//=======String Search Methods=============

// 1 : indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found.It is case sensitive.
// syntax
// indexOf(searchString)
// indexOf(searchString, position)

// let text = "chowan malhani";
// console.log(text.indexOf("thapa"));
// console.log(text.indexOf("Thapa"));

// let text = "chowan malhani";
// let strArr = Array.from(text);
// console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);



// 2 : lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello this is chowan malhani";
// let index1 = text.indexOf("chowan");
// let index2 = text.lastIndexOf("malhani");
// let index3 = text.lastIndexOf("chowan", 40);
// console.log(index2);


//? 3:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/Javascript/i);
// console.log(result);

 
// 4 :  match() : Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("JavaScript");
// console.log(result);



// 5 : matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = text.matchAll("javascript");
// let matchResult2 = text.matchAll("JavaScript");
// console.log(...matchResult2);

// 6 : includes(): Returns true if the string contains the specified value, and false otherwise.includes() is case sensitive. 

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes(/java/i);
// let includeResult = text.includes("J");
// console.log(includeResult);


// 7 :  startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result = text.startsWith("Hello");
// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);


// 7 : endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);


//=============== Extracting String =================

// 1: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);


// 2: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// console.log(result);


//==============Extracting String Characters===================

//1 charAT() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-6);
// console.log(result);

//2 charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);

//3 The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2)
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);
 

//=============Replacing String Content==================

// 1: replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "vinod");
// console.log(replacedString);


//==================Other Useful Methods====================

// 1: toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript


// 2 : trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);
// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

// 3 : split: Splits the string into an array of substrings based on a specified delimiter.
// const str = "apple,orange,banana";
// let strArr = str.split(",").reverse().join();
// console.log(strArr);
 
 
