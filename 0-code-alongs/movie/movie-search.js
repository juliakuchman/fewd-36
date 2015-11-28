//Structure

var form   = document.querySelector("form");
var input  = document.querySelector(".query");
var ul 	   = document.querySelector(".results");

//Events

form.addEventListener("submit", getMovies);


//Event Handlers

function getMovies(e) {
	e.preventDefault();
	console.log("getMovies");

	//create the url for the api request 
	var seach = input.value;
	var url = "http://www.omdbapi.com/?t=lion+king&y=&plot=short&r=json" + search;

	//make ajax request 
	jQuery.getJSON(url, updateMovies);

}

// Update Page

function updateMovies(json) {
	//debugging tricks 
	console.log("updateMovies");
	console.log(json);
	window.result = json;

	//reset/clear the page
	ul.innerHTML = "";

	var movies = json["Search"];

	//for each, need to run function on each of the 
	//different movie results 
	movies.forEach(createMovieItem);
}

function createMovieItem(movie) {
// step 1 - create
	var li = document.createElement("li")
// step 2 - attributes
// should be capital in bracket
	li.textContent = movie[Title];
// step 3 - append 
	ul.appendChild(li);
}