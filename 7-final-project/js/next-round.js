
//js formulas
//1. add total
//2. firebase
//3. based on local storage, provide a wait time 

// structure
// ------------------------------------------------

//customer name 
var firstName = document.querySelector(".first-name");

//where drink orders will be stored
var drinks = document.querySelector(".drinks");

//where new entries are added
var addDrink = document.querySelector(".add");

//this tells to generate total
var previewOrderBtn = document.querySelector(".preview-order");

//i think this is where orders would pop up...
var preview = document.querySelector(".preview");
var orderNow = document.querySelector(".order-now");

//where the total will be created 
var finalTotal = document.querySelector(".total");


// setup
// ------------------------------------------------

var totalValue = 0

//had to put orders within data
var data = {
	"orders": []
}

var order = {
	"name": "placeholder",
	"items": []
}


// add in my own firebase 
var firebase = new Firebase("https://next-round.firebaseio.com");

// events 
// ------------------------------------------------
window.addEventListener("load", setPageState);
addDrink.addEventListener("click", addDrinkForm);
previewOrderBtn.addEventListener("click", previewOrder);


// finish.addEventListener("click", newEntry);

/* this is the formulat to create cost 
*/


orderNow.addEventListener("click", placeOrder);


// event handler function
// ------------------------------------------------

// firebase function
// this tells the page to look for changed data from firebase 
function setPageState(event) {
	addDrinkForm();
	firebase.on("value", dataChanged);
}

// firebase function
function dataChanged(snapshot) {
// snapshot is an instance of the data at that second
// entire firebase database at that instant 

	// error checking. return early if nothing saved yet
	if (snapshot.val() === null) {
		return;
	}

	data = snapshot.val();
}

// add new drink entry form

function addDrinkForm(event) {

	//TIP: 
	// <li>
	// 	<input type="text" placeholder="favorite drink" class="drink-one" maxlength="30"/>
	// 	<input type="number" class="quantity-one" min="0" max="5">
	// </li>

	var li         = document.createElement("li");
	var drinkInput = document.createElement("input");
	var qtyInput   = document.createElement("input");

	drinkInput.setAttribute("maxlength", 30);
	drinkInput.classList.add("drink");
	qtyInput.setAttribute("min", 0);
	qtyInput.setAttribute("max", 5);
	qtyInput.classList.add("qty");
	qtyInput.setAttribute("type", "number");

	drinks.appendChild(li);
	li.appendChild(drinkInput);
	li.appendChild(qtyInput);

}

//puts in local storage...?
function previewOrder(e) {
	console.log("previewOrder");

	// get the name
	order.name = firstName.value;

	// get the items
	lis = drinks.querySelectorAll("li");
	var lis = Array.prototype.slice.call(lis);

	lis.forEach(getData);

	function getData(item) {
		var drink = item.querySelector(".drink");
		var qty = item.querySelector(".qty");
		var item = {
			"drink": drink.value,
			"qty": qty.value
		};

		order.items.push(item);
	}

	cost();
	// wait 100 milliseconds, then call cost
	// setTimeout(cost, 100);
}

function cost() {
	console.log('cost');
	order.items.forEach(getValue);

	// var numberDrinks = document.getElementsByClassName("qty");
	// numberDrinks.forEach(getValue);
}

function getValue(item) {
	var cost = item['qty'] * 10;
	totalValue = totalValue + cost

	finalTotal.textContent = totalValue;

	console.log("getValue", totalValue);

}


// pushes to firebase 
function placeOrder() {
	data.orders.push(order);
	firebase.set(data);
}

//lists new entry, where would use in order history
function newEntry(e) {
	
	var drinkValue = drink.value;
	var drinkQty = qty.value;

// create
	var newDrink = document.createElement("li");

// decorate 
	newDrink.innerHTML = '<div>' + drinkValue + ' ' + drinkQty + '</div>';

	preview.appendChild(newDrink);

}

/*function enter(event) {
	event.preventDefault();

	// get the current entry value from form, convert to number with parseFloat
	var cost = parseFloat(input.value);

	// update page
	createLine(cost);

	// clean up!
	input.value = "";

*/
/*
// Update page functions
// ------------------------------------------------
function createLine(item) {

	// create and append the new list item
	var li = document.createElement("li");

	// update the value for the total
	totalValue = totalValue + item;

	// set the text content for both the new list item and the total
	li.textContent = formatCurrency(item);
	total.textContent = formatCurrency(totalValue);

	entries.appendChild(li);

}

// Utility functions
// ------------------------------------------------
function formatCurrency(number) {
	var currency = parseFloat(number);
	currency = currency.toFixed(2);
	currency = "$" + currency;
	return currency;
}
*/



