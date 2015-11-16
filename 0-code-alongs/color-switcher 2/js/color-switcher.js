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

// Events
// -------------------------------------

//Version old
/*color1.addEventListener("click", changeColor)
color2.addEventListener("click", changeColor)
color3.addEventListener("click", changeColor)
color4.addEventListener("click", changeColor)
color5.addEventListener("click", changeColor)*/

//Refactored new 
list.addEventListener("click", changeColor)

// Event handler functions
// -------------------------------------

/*function makeLunch(event) {
	console.log("makeLunch");
	console.log(event.target);
}*/

function changeColor() {
	console.log("changeColor");
	console.log(event.target.tagName);

	if (event.target.tagName === "UL") {
		return;
	}

	var swatch = event.target;
	var color = swatch.className;
	var body = document.querySelector("body");
	
	body.setAttribute("class", color);

	//if had more than one span, would need to add .span-two
	//set variable, 
	//getAttribute 
	var name = document.querySelector("span");
	name.textContent = color; 

}



