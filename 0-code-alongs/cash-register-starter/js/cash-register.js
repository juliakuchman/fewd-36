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



// Event Handler Functions
// ------------------------------------------------