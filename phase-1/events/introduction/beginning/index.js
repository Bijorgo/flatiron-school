/*

Phase 1 -> DOM Events
by Sakib Rasul
Updated April 24, 2024
Created September 13, 2023

Objectives
1. Do something when an event fires on an element.
2. Handle a form submission by reading its input.

Takeaways
- "click" and "submit" events
- `event.preventDefault()`
- `[form].[input].value`

*/

// NOTES:

// the event life cycle:
    // 1. an event fires on a target (target- the thing the event is firing on, ex button, window, form...)
    // 2. we handle that event by triggering an event listener

// 3 questions to ask when handling events:
    // 1. what target do we want to handle an event on? ex. button, img...
    // 2. what event do we want to listen for on that target ex. click, scroll...
    // 3. what do we want to occur when that event fires on that target? ex. show dialog, print to console...


// ~ the "click" event
// 1. below: use query selector to make a reference to our desired target, #today
const today = document.querySelector("#today");
// 2. add event listener to the target that handles the event "click" by doing x
// syntax: variable.addEventListener("string format event", callback function in arrow form (anonFunction) => {function body})
    // today.addEventListener("click", () => {});
    // arrow function rules: some cases dont need () or {}
// 3. add instructions to function body
today.addEventListener("click", event => {
    // what we want to occur when the event fires on the target
    // event is the parameter determined by .addEventListener we can name it whatever we want, but we can't decide what the parameter can be- conventional naming is event or e
    // you will never be able to do anything more than name aparameter for a callback function
    // you *can* leave () empty and it will work, but changes what it does
    console.log(event);
    console.log("Today was clicked");
});

    // event is an object with information on what happened within the event 


// ~ the "submit" event
    // fires upon submitting omformation to a form
    // the form goes into html because it needs to exist upon loading the page (at least in this case)
    // target is the whole form b/c it needs to be submit as a whole
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    // we want to call the .preventDefault method on the event that just fired to prevent default behavior
    const favoriteFood = event.target["favorite-food"].value;
    const favoriteBeverage = event.target["favorite-beverage"].value;
    console.log(favoriteFood);
    console.log(favoriteBeverage);
    console.log("form submitted")

    console.log(document.querySelector("form")["favorite-food"].value);
    // replaces default behavior
    // bracket notation due to snake case in html, object key goes in
    // need .value to retrieve only the value, can replace w other thing if you want something else
    console.log(event.target["favorite-beverage"].value);
    // alt way to rerieve other input w/o re-writing everything
    // better way is setting form as variable first
    // event.target = what we set as the target- in this case the form
    // if you use event.target, you likely wont want to call the form again later

    // NOW we want to display values on screen, write in event listener so it only happens when event happens
    const response = document.createElement("p");
    // set response text to you enjoy
    response.textContent = `You enjoy ${favoriteFood}and ${favoriteBeverage}, Yum!`;
    document.querySelector("#form-and-response").append(response);
    // syntax: document.querySelector([parent element]).append(child element)
});
// if you want to be able to call above later on in code, you need to add const verName = before document, then split before querySelctor

// after form submit: inspect form gives you an object-like structure with key-names of input



    // ~ challenges
// 1. [easy] Add another click event handler.
// 2. [medium] Add some non-click, non-submit event listener to the page.


// 3. [hard] Add an image, and a form with one text input to the page.
//    On submit, have the image change to the URL specified in the text input.
// 4. [bonus] Add an event handler to #today so that whenever some or all of its text is copied,
//    that text is set as the content of #sometime.