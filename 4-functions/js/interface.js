
//Pythagorean Theorem 
var pyA = document.querySelector('.py-a');
var pyB = document.querySelector('.py-b');
var pyC = document.querySelector('.py-c');

pyA.addEventListener('keyup', calcPy);
pyB.addEventListener('keyup', calcPy);

function calcPy(event) {
  if (pyA.value.length > 0 && pyB.value.length > 0) {
    pyC.value = calcLongestSide(pyA.value, pyB.value)
  } else {
    pyC.value = '';
  }
}

var r = document.querySelector('.circum-r');
var c = document.querySelector('.circum-c');

r.addEventListener('keyup', calcC);

function calcC(event) {
  if (r.value.length > 0) {
    c.value = calcCircumference(r.value)
  } else {
    c.value = '';
  }
}

//Fahrenheit to Celcius and vice versa
//Variables are defined by string objects that user puts 
//Names are what referenced in html

var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');

tempF.addEventListener('keyup', calcFtoC);
tempC.addEventListener('keyup', calcCtoF);

//CalcFtoC is function
//event is the parameter/argument
//tempC is return 

// function calcFtoC(event) {
//   if (tempF.value.length > 0) {
//     tempC.value = (5/9) * tempF.value-32;
//   } else {
//     tempC.value = '';
//   }
// }

// function calcCtoF(event) {
//   if (tempC.value.length > 0) {
//     tempF.value = tempC.value * (9/5) + 32;
//   } else {
//     tempF.value = '';
//   }
// }