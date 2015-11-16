// Summary 
// Need to follow first three standard steps
// Next follow additional steps for add element

// Variables
var input = document.querySelector(".input");
var date = document.querySelector(".date");
var button = document.querySelector("button");
var tasklist = document.querySelector(".tasklist")

// Event functions 
button.addEventListener("click", addElement);


function addElement(event) {
	// step 1.1: create LI that holds task
	var task = document.createElement("LI");

	// step 1.2: create checkbox 
	var checkbox = document.createElement("input");

	var deadline = document.createElement("span");

	// step 2.1: decorate checkbox
	checkbox.setAttribute("type", "checkbox");

	// step 2.2: decorate task text
	task.textContent = input.value;
	
	// step 2.3: decorate task deadline
	deadline.textContent = date.value;

	// step 3: add element to DOM
	tasklist.appendChild(checkbox);
	tasklist.appendChild(task);
	tasklist.appendChild(deadline);
}




/*//

label = document.createElement
checkbox = document.createElement
span = document.createElement 



// Add Element Functions 
document.createElement("li")


	// Step 1 

	// Step 2: Add attributes
span.textContent = "";
checkbox.setAttribute=("type", "checkbox");

	// Make each task clickable to update
checkbox.addEventListner("click", )

	//Step 3: Add new html to DOM


//EXAMPLE
var taskz = [];

var task1 = {
	name: "exercise",
	date: undefined,
	completed: false,
}

var task3 = {
	name: "eat junk food",
	date: "2015-11-11",
	completed: false,
}*/