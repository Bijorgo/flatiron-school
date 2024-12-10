/*

Phase 1 -> GET
Updated August 12, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a `GET` request to an external API for a specific item.
2. Make a `GET` request to an external API for a list of items.
3. Write a function that makes a `GET` request to an external API.

*/

fetch("https://dogapi.dog/api/v2/facts") //NO ; WILL CAUSE .THEN TO NOT BE ABLE TO READ ANYTHING
    //fetch() is a function and uses functional syntax
    //takes 2 parameters, 1st-("url") required
    //url on its own asks to make a READ request (GET request is the language), but doesnt do anything with it
    // if most recent response returned a sucessful result, then execute...
.then( // callback function that executes when last line runs sucessfully ie. when GET request comes through
    response => {
 //       console.log(response);
            // anything written here will occur after a sucessful GET request
            // "response" is like event in event listener-can be names anything if you really wanted to and is a placeholder
            // response contains object with information about the request we made(?)
        return response.json();
            //take response from fetch() and converting it to its readble/usable data
            // json - javaScript object notation
    }
) //NO ;
// if the most recent promise (response.json) was sucessful, then...
.then(
    //...then execute this callback function
    dogFactData => {
 //       console.log(dogFactData);
        // dogFactData is an object whose keys are:
        //      data is an array
        //            whose first element is an object whose keys are:
        //              attricutes is an object whose keys are:
        //                    boday!!!<----the dog fact we're looking for
        //               id
        //               type
  //      console.log(dogFactData.data);
        //go to object dogFactData and go to key data(which is an array)
  //      console.log(dogFactData.data[0]);
        //go to data array and go to first element
 //       console.log(dogFactData.data[0].attributes);
        // within that first element (object) go to key attributes(object)
 //       console.log(dogFactData.data[0].attributes.body);
        // within the object attributes, go to key body which is the key that represents the dog facts we are looking for
        // you dont actually need each step by step, you can just write last line. we outlined step by step for learning
    
        //NOW: CREATE ELEMENT AND USE THE DOM TO DISPLAY THIS INFORMATION ON THE BROWSER
        const dogFact = document.createElement("p");
        dogFact.textContent = `${dogFactData.data[0].attributes.body}`
        document.querySelector("#dog").append(dogFact);

    }
) // NO ; any time there is a line that starts with . make sure there is no ; between last function and . so it can read something
// (below) if anything in the chained promises were unsucessful, then...
.catch(
    // execute this callback function
    // if anything goes wrong along the way, "catch" the error and handle it in this way
    // while this is attached to the 2nd .then(), this will also catch any unsucesses ealier on
    // ie. preactically acts as the default, handle errors
    error => {
        //console.log(error); // this works but there's a method that's better
        console.error(error);
    }
);
    
    

// a PROMISE is a function that garuntees a result -ex fetch() json()
// may look like a "sucess" or a "failure"
// in either case, we'll get a result

// thie structure looks like fetch(...).then(...).then(...).catch(...);
// .then() only works if there is a sucessful promise to move on from
// .catch() works the same as .then(), but instead of handling most recent promise's sucessful result...
    //...it handes most recent promise's unsucessful result 


// when we're done interacting with URL, as long as that occurs sucessfully, THEN do whatever is specified in () (callback function)

// A synchronous request to https://dogapi.dog/api/v2/facts.

// A synchronous request to https://anapioficeandfire.com/api/books.

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name].

function getPokemon(pokeName){
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => response.json())
        //take the response as input and try to return its JSON equiv.
        // json is raw data, no meta data and stuff. thats why next param below is often data
    .then(
        data => {
            console.log(data)
        }
    )
        // specifically handling the conversion to json

};


// ASYNC AWAIT FUNCTION NOTATION
    // if you write async before function, you may write await later
    // await allows you to name the response
    // shorthand for returning a promise 
    // only works if you need to create a function and not writing fetch() in global scope
    
const pokemonTag = document.querySelector("#pokemon");
const pokeFact = document.createElement("p");

const pokeInputBox = document.createElement("input");
pokeInputBox.id = "input";
pokemonTag.append(pokeInputBox);
const btn = document.createElement("button");
pokemonTag.append(btn);
btn.textContent = "Submit";
// add somewhere to type a pokemon + submit button

btn.addEventListener("click", (event) => {
    const pokeName = pokeInputBox.value;
    // take input box value, porbably need to make everything lower case 
    async function getPokemonAsync(pokeName) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    const data = await response.json();
    //console.log(data);
        // run the json() promise and convert into data, name it data
        // data is no longer a promise
        // you will likely get back object or array, now you traverse to use your data
        // use the data returned by sucessful response by response.json()
    pokeFact.textContent = `Name : ${data.name} Abilities : ${data.abilities[0].ability.name} Height : ${data.height} ID: ${data.id}`;
    // set text content of p element under pokemon, need to traverse the objects to find data we want
    pokemonTag.append(pokeFact);  // append pokeFact w/ new text content to pokemonTag, place here b/c we need the new text first
    
    }
    getPokemonAsync(pokeName); // need to call function here but idk why
    
});



getPokemon("ditto");
getPokemon("pikachu");









// ~ Challenge: Make a GET request to an API of your choice!


// NOTES:

// syncronous code: instructions that are run in order (L->R, Top->Bottom)
    // ex. console.log("Hello");
    //     const num = 5;
    // must move through console then log then (), BEFORE moving on to const num
    // is "blocking"-"when on this line, we are blocked from reading other code"
// asyncronous code: code that runs in the background
    // deals with code that might take a while to run
    // means it doesn't need to be complete before moving on to the next thing
    // we can do other things while this function resolves, not "blocked" from doing other things
    // fetch itself is an async function(b/c JavaScript understands it might take a while to resolve) regardless of if we say async function ... await
    // we can define a piece of code as explicitly async by defining async function...