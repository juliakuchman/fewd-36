// Structure
// -------------------------------------

//version old
/*var color1 = document.querySelector(".olive");
var color2 = document.querySelector(".skyblue");
var color3 = document.querySelector(".salmon");
var color4 = document.querySelector(".burlywood");
var color5 = document.querySelector(".thistle");*/

//Refactored new 
// remove duplicate add event listners 
var list = document.querySelector("ul");

//Setup

var theme = {
	"color" : white
}


// Events
// -------------------------------------

//Version old
/*color1.addEventListener("click", changeColor)
color2.addEventListener("click", changeColor)
color3.addEventListener("click", changeColor)
color4.addEventListener("click", changeColor)
color5.addEventListener("click", changeColor)*/

//Refactored new 
list.addEventListener("click", handleClick)

// Event handler functions
// -------------------------------------

/*function makeLunch(event) {
	console.log("makeLunch");
	console.log(event.target);
}*/

//divide function so that can happen at 
//different times 
function handleClick(event){
	//return early unless the swatch was clicked
	//get data from page
	if (event.target.tagName === "UL") {
		return;
}

	var swatchElement = event.target;
	var swatchColor = swatch.className;
	//two ways to do the same thing 
	//var color = swatch.getAttribute("class");
	
	//1. Update data model
	theme.color = swatchColor;

	//2. Call function to update
	changeColor(theme);

	//3. Save the data model to local storage
	localStorage.setItem("theme", JSON.stringify(theme));

}

function pageLoad(event) {
	//get theme object out of local storage 
	if 

	else {
		(var theme = JSON.parse(localStorage.getItem("theme")) == null) {
		changeColor(theme);
	} else {


	}

	console.log(theme);

	changeColor(theme);
}


function changeColor(theme) {
	var body = document.querySelector("body");
	body.className = theme.color;

	//if had more than one span, would need to add .span-two
	//set variable, 
	//getAttribute 
	var name = document.querySelector("span");
	name.textContent = theme.color; 
}





