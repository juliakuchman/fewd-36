var tempF = document.querySelector(".f-box");
var tempC = document.querySelector(".c-box");
var buttonF = document.querySelector(".f-to-c");
var buttonC = document.querySelector(".c-to-f");

buttonF.addEventListener("click", calcFahrenheitToCelcius);
buttonC.addEventListener("click", calcCelciusToFahrenheit);

    function calcCelciusToFahrenheit(event){
    	tempC = (5/9) * (tempF-32)
      	return tempF.value
    }

    function calcFahrenheitToCelcius(event){
     	tempF = tempC * (9/5) + 32;
     	return tempC.value;
     }