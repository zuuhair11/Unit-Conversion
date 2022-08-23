/*
    1 meter = 3.281 feet
    1 liter = 0.264 gallon
    1 kilogram = 2.204 pound
*/ 

// Aceess to the input 
const inputConvert = document.getElementById('input-convert');
// Acceess to the button conver
const convertBtn = document.getElementById('btn-convert');

// Units field
const meterField = document.getElementById('meter-field');
const volumeField = document.getElementById('volume-field');
const massField = document.getElementById('mass-field');


// Listen to the event when the button clicked
convertBtn.addEventListener('click', renderConversion);
function renderConversion() {
    let userValue = inputConvert.value;
    if(!isNaN(userValue) && userValue !== '') {
        // Converte to each specific unit
        const meter  = (userValue * 3.281).toFixed(3);
        const feet   = (userValue / 3.281).toFixed(3);

        const liter  = (userValue * 0.264).toFixed(3);
        const gallon = (userValue / 0.264).toFixed(3);

        const kilo   = (userValue * 2.204).toFixed(3);
        const pound  = (userValue / 2.204).toFixed(3);

        // Append the results to the paragrapghes fields
        meterField.innerHTML = `${userValue} meters = ${meter} feet | ${userValue} feet = ${feet} meters`;
        volumeField.innerHTML = `${userValue} liters = ${liter} gallons | ${userValue} gallons = ${gallon} liters`;
        massField.innerHTML = `${userValue} kilos = ${kilo} pounds | ${userValue} pounds = ${pound} kilos`;

    } else {
        alert('The value should be a number')
    }

    clearInput()
}

function clearInput() {
    inputConvert.value = ''
}
