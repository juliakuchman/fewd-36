var tempF = document.querySelector(".f-box");
var tempC = document.querySelector(".c-box");
var buttonF = document.querySelector(".f-to-c");
var buttonC = document.querySelector(".c-to-f");
var buttonClear = document.querySelector(".clear-text");

buttonF.addEventListener("click", calcFahrenheitToCelcius);
buttonC.addEventListener("click", calcCelciusToFahrenheit);

//event listener without a callback, straight to function
buttonClear.addEventListener("click", function(){
	tempF.value = "" ;
	tempC.value = "" ;
} );

    function calcCelciusToFahrenheit(){
    	tempF.value = tempC.value * (9/5) + 32;
    }

    function calcFahrenheitToCelcius(){
		tempC.value = (5/9) * (tempF.value-32);
     }

