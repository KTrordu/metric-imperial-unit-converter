const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
const inputEl = document.getElementById("input");
const buttonEl = document.getElementById("convert-btn");

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

    let inputValue = parseInt(inputEl.value);

    convertLength(inputValue);
    convertVolume(inputValue);
    convertMass(inputValue);
})

function convertLength(value) {
    
    let meterValue = 0;
    let feetValue = 0;

    feetValue = Math.round((value * meterToFeet * 1000)) / 1000;
    meterValue = Math.round((value * feetToMeter * 1000)) / 1000;

    lengthEl.textContent = `${value} meters = ${feetValue} feet |
 ${value} feet = ${meterValue} meters`;
};

function convertVolume(value) {

    let literValue = 0;
    let gallonValue = 0;

    literValue = Math.round((value * gallonToLiter * 1000)) / 1000;
    gallonValue = Math.round((value * literToGallon * 1000)) / 1000;

    volumeEl.textContent = `${value} liters = ${gallonValue} gallon |
 ${value} gallon = ${literValue} liters`;
};

function convertMass(value) {

    let kiloValue = 0;
    let poundValue = 0;

    kiloValue = Math.round((value * poundToKilo * 1000)) / 1000;
    poundValue = Math.round(value * kiloToPound * 1000) / 1000;

    massEl.textContent = `${value} kilos = ${poundValue} pound |
 ${value} pound = ${kiloValue} kilos`;
};