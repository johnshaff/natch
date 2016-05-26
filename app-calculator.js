var convert = {
  inche: 0.393,
  centimeter: 2.540,
  milliliter: 29.573,
  ounce: 0.034,
  kilometer: 1.609,
  mile: 0.621,
  metricTon: 0.907,
  standardTon: 1.102,
  kilogram: 0.454,
  pound: 2.205
};
var response = {
  inche: ' centimeters equals ',
  centimeter: ' inches equals ',
  ounce: ' milliliters equals ',
  milliliter: ' ounces equals',
  kilometer: ' miles equals ',
  mile: ' kilometers equals ',
  metricTon: ' standard tons equals ',
  standardTon: ' metric tons equals ',
  kilogram: ' pounds equals ',
  pound: ' kilograms equals '
};

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
  var result = document.getElementById('results');
  var amountToConvert = parseFloat(event.target.amount.value);
  var userInput = event.target.units.value;
  var units = convert[userInput];
  var answer = parseFloat(units) * amountToConvert;
  console.log(answer);
  result.innerHTML = amountToConvert + response[userInput] + answer + ' ' + userInput + 's.';
}

form.addEventListener('submit', handleButtonClick);
