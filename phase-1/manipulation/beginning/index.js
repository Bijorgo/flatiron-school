/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node. = READ (ie element, tag, <>)
2. Modify a node. = UPDATE
3. Remove a node. = DELETE
4. Append a node. = CREATE

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.


//document.querySelector()
// above is method like console.log, querySelector is a method of document, parameter is required
// (parameter) contains string of what we want to read of the DOM
// describe tags, id's, classes to look up with querySelector
// syntax for document.querySelector: #for id . for class

// this ex. below read, or select, first tag named h1
console.log(document.querySelector("h1"));
// look @ browser console, reads <h1>DOM Manipulation</h1>
console.log(document.querySelector("h1").textContent);
// .textContent plus console.log prints the text within h1
// look up tag to see what we can look up with .textContent

console.log(document.querySelector("#today"));
//read/select tag with id of today

console.log(document.querySelector(".address"));
// below: quuerySelectorAll doesn't stop at the first match, but comes up with a node list of all array like-object
 console.log(document.querySelectorAll(".address")[1]);
 //takes the array-like object and selects the second item with [1], can change # in there to select different position
 // array access notation

// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#forever").textContent = "Forever!";



// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#forever").remove();
// .remove is a method of a function, so it needs ()


// ~ Create + Append a node
// -> createElement(), append()
// most complex of the 4
const newHeading = document.createElement("h2");
//document.createElement("h2") - creates a tag <h2>, but doesnt tell browser where it should exist
//document.querySelector("#tag, #id, or ,class").append(a new element yo add as a child)
//const newHeading = allows us to reference this new element later 
document.querySelector("#dates").append(newHeading);
// above "#dates" selects the id dates
// now h2 has been created, but it doesn't contain anything yet, so the web page looks like nothing changed
newHeading.textContent = "New Tag";
// this is the new text inside h2

//recap:
// 1. create a tag
// 2. Modify new element (ex. set textContent)
// 3. append new element as a child of existing element 


// Notes:
// defer keyword tells browser to wait to run .js until after HTML has all been loaded
// important b/c we need the html to exist before we can manipulate it

// Why work with HTML within JavaScript?  :
// JavaScript is intended to do HTML things AFTER your HTML has loaded
// JavaScript adds interactivity and functionality to page
// HTML fine contains static information
// user events in HTML occur triggering DOM manipulation 



// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
    // diplayList("Books", ["The Shining"]) => a new list appended to the page according to the args. 

// 2. Replace the <strong> element with a newly created one.
    //