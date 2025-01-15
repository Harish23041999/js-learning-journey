// JavaScript string stores a series of characters like "John Doe".

//string are immutable.

//A string can be any text inside double or single quotes:

let a = "max";
let b = "rock";
let c = `shine`;
console.log(a);
console.log(b);
console.log(c);

// string methods
//All string methods return a new string. They don't modify the original string.
//Formally said: Strings are immutable: Strings cannot be changed, only replaced

//The trim() method removes whitespace from both sides of a string:

let text1 = "     Hello World!     ";
let text2 = text1.trim();

console.log(text1);

//A string is converted to upper case with toUpperCase():

//A string is converted to lower case with toLowerCase():

let hi = "Hello World!";
let bye = hi.toUpperCase();
console.log(bye);

let hi1 = "Hello World!";
let bye1 = hi1.toLowerCase();
console.log(bye1);

//concat() joins two or more strings:

let a1 = "harry";
let b1 = "potter";
let c1 = a1.concat("", b1).toUpperCase();
console.log(c1);

// JavaScript String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: start position, and end position (end not included).

// slice(start, end)
// substring(start, end)
// substr(start, length)

let text = "Apple, Banana, Kiwi";
let part = text.slice(6, 13);
//console.log(part);

let str1 = "Apple, Banana, Kiwi";
let part1 = str.substr(7, 6);

let str2 = "Apple, Banana, Kiwi";
let part2 = str.substring(7, 13);
