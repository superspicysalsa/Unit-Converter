/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputNumber = document.getElementById("input-number")
const convertBtn = document.getElementById("convert-btn")
const meter = 1
const feet = 3.281

const liter = 1
const gallon = 0.264

const kilogram = 1
const pound = 2.204

const metersFeetP = document.getElementById("meters-feet")
const litersGallonP = document.getElementById("liters-gallon")
const kilogramsPoundsP = document.getElementById("kilograms-pounds")

function convert() {
    if (inputNumber.value.length < 20) {
    let inputtedNumber = inputNumber.value
    
    const sentenceMf = `${inputtedNumber} meters = ${(inputtedNumber*feet).toFixed(3)} feet | ${inputtedNumber} feet = ${(inputtedNumber/feet).toFixed(3)} meters`

    let sentenceLg = `${inputtedNumber} liters = ${(inputtedNumber*gallon).toFixed(3)} gallons | ${inputtedNumber} gallons = ${(inputtedNumber/gallon).toFixed(3)} liters`
    
    let sentencekP = `${inputtedNumber} kilos = ${(inputtedNumber*pound).toFixed(3)} pounds | ${inputtedNumber} pounds = ${(inputtedNumber/pound).toFixed(3)} kilos`
    
        metersFeetP.textContent = sentenceMf
        litersGallonP.textContent = sentenceLg
        kilogramsPoundsP.textContent = sentencekP

    }

}

convertBtn.addEventListener("click", convert)

inputNumber.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        convertBtn.click()
    }
})

// add a limit on numbers you can add
//enter as well