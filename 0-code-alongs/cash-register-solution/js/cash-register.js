// Structure
// ------------------------------------------------
var form    = document.querySelector("form");
var input   = document.querySelector("input");
var entries = document.querySelector(".entries");
var total   = document.querySelector(".total");


// Setup
// ------------------------------------------------
var totalValue = 0;


// Events
// ------------------------------------------------
form.addEventListener("submit", enter);


// Event handler functions
// ------------------------------------------------
function enter(event) {
	event.preventDefault();

  // get the current entry value, convert to number with parseFloat
	var entry = parseFloat(input.value);

  // update the value for the total
	totalValue = totalValue + entry;

  // create and append the new list item
	var li = document.createElement("li");
	entries.appendChild(li);

  // set the text content for both the new list item and the total
	li.textContent = formatCurrency(entry);
	total.textContent = formatCurrency(totalValue);

	// clean up!
	input.value = "";
}


// Utility functions
// ------------------------------------------------
function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}
