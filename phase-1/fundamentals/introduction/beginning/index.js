/*

Phase 1 -> An Introduction to JavaScript
by Sakib Rasul
Updated March 12, 2024
Created August 21, 2023

Core Deliverables
1. Learn about variables, types, arrays, conditional statements,
   functions, and scope.
2. Complete the three challanges.

*/

//Notes:
// this is a single line comment
/* this is used for multi line comments */
// below: looking at function calls, assumes ex. createBody etc have been defined at some point
// <img src="dog.png"> === createImage("dog.png") >>>HTML vs JavaScript
// <body></body> === createBody() 
// use ; while using JavaScript for backwards compatability, technically options;
/** this syntax will be linked to variable after it in vs code, see students variable, usefull when code gets long and original meaning got far away */

// ~ VARIABLES
// -> constants, variables, logging, annotations
console.log("Hi!");
// This will print to CONSOLE!!! in browser: ctrl+shift+i then go to console
// useful for debugging if added at the end and write "all done"-read top to bottom and only printed if nothing went wrong
const x = 5;
//console.log(y);
// colsole will throw ReferenceError b/c y hasn't been defined yet
let y = false;
console.log(y);
// logs false
y = "Hello!";
// 2 ways to define a variable
// const can not change over time
// let can change later on
// default to const unless you know for sure a variable will change over time
// if you try to "re-declare" a variable defined with const, you will get Uncaught TypeError: Assignment ... ro constant veriable
console.log(y);
// logs Hello

/** This holds the number of students in SE-NTL-111824 */
const students = 4;




// ~ VARIABLE TYPES
// -> undefined, null*, boolean, number, string
let nothing;
console.log(typeof(nothing));
// typeof  is a function that checks the type of variable, holds on to the value without returning, you need console.log to return here 
// undefined is a type automatically assigned by JavaScript, occurs naturally
// null is the same as unfedined, but we "opt in" or asign it
// more strings:
console.log(`I teach ${students} students`) //interpolation, requires back ticks 
console.log("I teach " + students + "students.") //concatenation, we are going in and out of "string" reading, simpler in syntax
//interpolation and concatination allows for values to be read in a string such as above



// ~ OBJECTS
// -> definition, bracket/dot notation, stringify
// def: a collection of named values
const website = {
    "date-created": "today",
    author: "Sakib",
    visitors: 5
    //last comma is optional here, in JSON it will break if you have last comma
};
// { [key] : [value], [key2] : [value2],... }
console.log(website["visitors"]);
// logs 5
// bracket notation to read value of "visitors" in object "website"
console.log(website.author);
// dot notation to read "author" in object "website"
// if key name is a string, you can use any syntax you want
// if key name is a string (doesn't follow typical naming conventions ie camelCase syntax) you can't use dot notation
// if making a key a string, you cant use ` (back tick)
console.log(website["date-created"]); //bracket notation used for key that's a string

website.visitors = 6;
console.log(website.visitors);
//changing value attached to a key using dot notation


// ~ ARRAYS
// -> definition, access, modification
// values in arrays are referred to by their position, not a key
const numbers = [ 1, 2, 3, 4, 5];
console.log(numbers[0]);
// 0 index system - position starts at 0 instead of 1
// above returns 1
numbers[3] = 5;
console.log(numbers);
// changes a value in an array

// ~ CONDITIONALS
// if, if-else, if-else-if-else, ternary
/*
if ([condition]) { [what we want to do if the condition holds ]}
else { [ what we want to do if the condition doesn't hold]} //optional
*/

if(students > 5) {
    console.log("We have a large class.");
} else if (students > 3) {
    console.log("We have a small class.");
} else {
    console.log("We have a very small class.");
}

// Ternary statement example below:
const greeting = students > 5 ? "Welcome, large class!" : "Hey, small class!";
console.log(greeting);
// ternary operator( ? : ) commonly used for conditionally determining the value of a variable
// best used if yes/no case, otherwise it gets hard to read
// [condition] ? [value if holds] : [value if doesn't hold]

// ~ FUNCTIONS
// -> name, parameters, body, return, annotations
// -> methods, forEach, callback functions, anonymous functions
// def. a named or anonymous block of executable code that we can call later, has special capability of taking input and letting that change things within the function
function calculateSum(a,b) {
    //what you want the function to do when called 
    console.log("I'm a function");
    console.log("a is " + a);
    console.log("b is " + b);
    console.log(a+b);
};



calculateSum(5,6); //calls function, just defining a function does not call it
//(5,6) = (a,b) positionally 
// if you don't want input, don't put anything in the (), if you do, add as many parameters as you want inputs ex. (a,b)

//return vs console.log covered below:

/**
 * Outputs the sum of two given numbers (this section helps us document)
 * @param {*} a the first of the two number
 * @param {*} b the secons of the two number
 * @returns the sum of a and b
 */
function calculateSum(a,b) {
    //what you want the function to do when called 
    console.log("I'm a function");
    console.log("a is " + a);
    console.log("b is " + b);
    return a + b;
};
// return -> make value of calculateSum(a,b) === a + b
calculateSum(5,6);

console.log(calculateSum(1,2) + calculateSum(3,4));
//return allows value output to be used ex in line above. console.log would return undefined b/c it can't hold the value to keep using it

// map, forEach: array **methods** that use **callback functions**
// method ex. log and map, can't be run on their own but are a mothod of another function
// map: array method that performs function on each element and returns a new array

const nums = [1, 2, 3];
// below: map is an array method that transforms every element of an array
//
//nums.map(number => { return number * 2});
// function [ ](number) {return number * 2}
// "arrow function" - example above is written to be verbose, less verbose below:
// if only one input-take out ()
// if you're only returning a value, you can take out return and {}

const doubleNums = nums.map(number => number * 2);
// above: visit every element of nums and run this function where number is the current element we're visiting
// in this ex. number is a parameter and can be anything, ex. n
console.log(nums);
// nums.map doesn't change original array
console.log(doubleNums);
//returns [2, 4, 6]
// you don't need to define const doubleNums =, you just wont be able to access new array if you dont


// forEach: array method that visits each element and runs function, but doesn't create new array
// like a quicker for loop. ex. below
nums.forEach(n=> console.log(n));
// n is the same as numbers in map example
// logs function on each element, but doesn't return it, so, you can't use new value



// ~ SCOPE
// -> global, local, closures, function hoisting
// definition: scope = what you have access to, when, and where 
// **global scope** is the scope that exists above all others, things written in global scope are available everywhere in the program/file
let variable = 5; // has global scope

function doSomething() {
    console.log(variable);
    // when we define a function, we create a local scope
    // local scope starts at { ends at } is its body, not accessable globally 
    // we can access variables with global scope inside the local scope
    // conditional statements, objects, etc also have {}, any {} will create a local scope
    // the more nested you are, the more access you have, the less nested the less access
    const localVar = 20;
    console.log(localVar);
    function smallerBubble() {
        // this is a nested function
        // variable is accessible here
        // localVar is accessible here b/c we are still within its {}
        // anotherVar (from anotherFunc function below) is not accessible
        const yetAnotherVar = 6;
        // yetAnotherVar is acessible here 
    }
    // yetAnotherVar is not accessible here because wer are outside of its scope {}
}

// yetAnotherVar is also not avaiable here

//console.log(localVar)
// above will error : localvar is not defined
// one local scope will not be accessable to another local scope 
doSomething();

function anotherFunc() {
    const anotherVar = 2;
}







// scope diagram * means created here, -x- mean not accessible

// { a*  -b-   { a b*}  -b-  {  a -b-}  -b-  }




// closures: everything a function has access to
// a function has access to everything globally as well as everything within its body {}

// function hoisting: whene you define a function in the global scope, it is accessible globally before and after it's declared 
// also works when defined locally, you can call a function before its defined as long as it's still within its scope
// hoisting is an extra capability of functions within JavaScript b/c JavaScript priotitizes functions
// arrow functions aren't hoist-able
// variables can't be hoisted


const sayPhrase = (phrase) => { console.log(phrase);};
// this can't be hoisted unless you replace const with var which can create scope issues-not best practice, don't bother 
sayPhrase("hello");
// this is how you call this arrow function


// CHALLENGES
// Try these practice problems on your own to reinforce this lesson's material :)
// 1. Write a function named `sum` that takes an array of `numbers` and returns its sum.
    //ex. console.log(sum[1,2,3]) => 6 console.log(sum[1,2,3]+1) => 7

// 2. Write a function named `double` that takes an array of `numbers` and doubles each of its values.
    //map?
    //ex. const nums = [1,2] double(nums) console.log(nums) => [2,4]
// 3. Write a function named `lowercase` that takes an array of `words` and returns a lowercased copy.
    // const words = ["Hello", "BYE"] lowercasewords = lowercase(words)
    //console.log(words) => ["Hello", "BYE"]
    //console.log(lowercasewords) => ["hello", "bye"]
