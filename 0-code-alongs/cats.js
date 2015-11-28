// Structure
// ----------------------------------------------

var pictures = document.querySelector(".pictures")
var names = document.querySelector(".names")

// Events
// ----------------------------------------------


// Setup
// ----------------------------------------------
var cat {
	picture: "baby.jpg"
	name: "Daisy",
}



// Event handlers
// ----------------------------------------------
window.addEventListener("load", setupPage);

// Update page functions
// ----------------------------------------------

function setupPage() {
	mockPictures.forEach(createPicture);

} 


function createName(item) {
	var li = document.createElement("li");
	li.textContent = "dsljasfd";
	names.appendChild(li);
}


//Step 4: put in a function
function createPicture(item) {
	//Step 1: create elements
	var li = document.createElement("li");
	var img = document.createElement("img");

	//Step 2: decorate elements
	img.setAttribute("src", "images/" + item);

	//Step 3: insert in the dom 
	li.appendChild(img);
	pictures.appendChild(li);

}


function createPost(item) {
	//Step 1: create elements
	var li = document.createElement("li");
	var img = document.createElement("img");

	//Step 2: decorate elements
	img.setAttribute("src", "images/" + item);

	//Step 3: insert in the dom 
	li.appendChild(img);
	li.appendChild(p)
	pictures.appendChild(li);

}

