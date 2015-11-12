//Variables
  	var colorStop = document.querySelector(".red");
	var colorSlow = document.querySelector(".yellow");
	var colorGo = document.querySelector(".green");

	var buttonStop = document.querySelector(".stop");
	var buttonSlow = document.querySelector(".slow");
	var buttonGo = document.querySelector(".go");

//Events
buttonStop.addEventListener("click", changeColor1);
buttonSlow.addEventListener("click", changeColor2);
buttonGo.addEventListener("click", changeColor3);

//Event Handler Functions
function changeColor1(something) {
	//console log 
	console.log(something.target.className);
  	colorStop.classList.remove("hidden"); 
}

function changeColor2() {
   colorSlow.classList.remove("hidden");  
}

function changeColor3() {
   colorGo.classList.remove("hidden");
}
