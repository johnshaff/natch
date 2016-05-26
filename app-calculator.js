var inchesToCentimeters = 2.540;
var centimeterToInches = 0.393;
var fluidOunceToMilliliter = 29.573;
var milliliterToFluidOunce = 0.034;
var milesToKilometers = 1.609;
var kilometersToMiles = 0.621;
var standardTonToMetricTon = 0.907;
var metricTonToStandardTon = 1.102;
var poundsToKilograms = 0.454;
var kilogramsToPounds = 2.205;
var form = document.getElementById('conversion-form');

function handleButtonClick(event) {
  event.preventDefault();
  console.log(event);
  var result = document.getElementById('results');
  var amountToConvert = event.target.amount.value;
  console.log(amountToConvert);
  var units = event.target.units.value;
  console.log(units, amountToConvert);
  // parseFloat(units);
  var answer = parseFloat(units) * parseFloat(amountToConvert);
  console.log(answer);
  result.innerHTML = answer;
}

form.addEventListener('submit', handleButtonClick);
