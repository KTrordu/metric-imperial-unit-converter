const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("button");

const meterToFeet = 3.281;
const feetToMeter = 0.304;

const literToGallon = 0.264;
const gallonToLiter = 3.785;

const kiloToPound = 2.204;
const poundToKilo = 0.453;

lengthEl.textContent = `1 meter = 3.281 feet | 1 feet = 0.304 meters`;
volumeEl.textContent = `1 liter = 0.264 gallon | 1 gallon = 3.785 liters`;
massEl.textContent = `1 kilo = 2.204 pound | 1 pound = 0.453 kilos`;

buttonEl.addEventListener("click", function() {

})

function convertLength(value) {
    
    let meterValue = 0;
    let feetValue = 0;

    feetValue = (value * meterToFeet);
}