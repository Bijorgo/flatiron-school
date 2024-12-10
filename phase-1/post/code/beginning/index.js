/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated August 13, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
+1. Run an instance of JSON Server that hosts a dataset.
2. Make a GET request to display a dataset.
3. Make a POST request to add to that dataset.

*/

 

fetch("http://localhost:3000/genres")
.then((response) => response.json())
.then((genre) => {
    //console.log(genre);
    // do something with this data: append to view in browser
    //create loop/iteration through all items forEach
        //create <li> to become child
    genre.forEach((genre) => {
        const li = document.createElement("li");
        li.textContent = genre.name + "(Popularity: " + genre.popularity + "/5)";
        document.querySelector("#Genres").append(li);
    })
    
})
.catch(error => {console.error(error)});

// ABOVE Let's try making a GET request to display existing data on the page.

// BELOW let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.

document.querySelector("form").addEventListener("submit", event => {
    const form = document.querySelector("form");
    const genreName = document.querySelector("form")["genre-name"].value;
    const popularity = document.querySelector("form")["Popularity"].value;
    //code
    event.preventDefault();
    //console.log("Genre submitted");
    // A POST request ie a CREATE request to http://localhost:3000/genres to create a new genre in db.json
    fetch("http://localhost:3000/genres", {
        // second parameter that is an object
        // as keys of the second parameter of object of fetch()
        // method: "GET"  // is default, unwritten in what we did earlier
        method: "POST",
        // type of request
        // alts are GET, POST, PATCH, DELETE...
        headers: {
            // any meta data we want to send along w/ our request
            "Content-Type": "application/json", // the type of content we're sending, we dont send info w/ get, application/json says we're sending json content
            "Accept": "application/json" // the type of content we want to recieve in the resopnse to our request
        },
        body: JSON.stringify({
            // json will create an id for us
            name: genreName,
            // we want key name to be consistant with what is in database
            popularity: popularity
        }),// what content we want to send with our request
    });
    document.querySelector("form").reset();
    // after a sucessful post request, do some dom manipulation so the user can see new genre without needing to re-load 
});



// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests.
//    Try abstracting them into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests!