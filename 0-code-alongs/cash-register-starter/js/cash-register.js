// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");

// Setup
// ------------------------------------------------
var totalValue = 0;

//DATA MODEL. Everything needs to revolve around this
var receipt = {
	"items" : []
}

// Events
// ------------------------------------------------
form.addEventListener("submit", enter);
window.addEventListener()

// Event handler functions
// ------------------------------------------------
function pageLoad() {

	//todo: get out of local storage
	receipt.items.pull(entry);

	//for each item in array, runs create Item
	receipt.items.forEach(createItem);
}


function enter(event) {
	//prevents default functioning of form
	event.preventDefault();

	//get the current entry value, convert to number with parseFloat
	//converts string to number 
	var entry = parseFloat(input.value);

	//when events happens, need to store to local storage
	//pushing into data model 
	receipt.items.push(entry);

	//todo: save to local storage 
 

 	//1. Update data model
	receipt.textContent = swatchColor;

	//2. Call function to update
	createItem(receipt);

	//3. Save the data model to local storage
	localStorage.setItem("items", JSON.stringify(receipt));


/*	if 

	else {
		(var receipt = JSON.parse(localStorage.getItem("items")) == null) {
		createItem(entry);
	} */

}

function createItem(entry) {
  	//create and append the new list item
	var li = document.createElement("li");
	entries.appendChild(li);

  	//set the text content for both the new list item and the total
	li.textContent = formatCurrency(entry);
	total.textContent = formatCurrency(totalValue);

	//update the value for the total
	totalValue = totalValue + entry;

	//clean up!
	input.value = "";

	//form.reset(); resets the form when the user presses enter 
}




// Utility functions
// ------------------------------------------------
function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}