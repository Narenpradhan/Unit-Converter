let inputEl = document.getElementById("input-el")
const button = document.getElementById("convert-btn")
let lenEl = document.getElementById("len-el")
let volEl = document.getElementById("vol-el")
let massEl = document.getElementById("mass-el")
let input = 0

button.addEventListener("click", () => {
    input = Number(inputEl.value)
    len(input)
    vol(input)
    mass(input)
    
})

function len(param) {
    lenEl.textContent = `${input} meters = ${(input*3.281).toFixed(3)} feets | ${input} feets = ${(input/3.281).toFixed(3)} meters`
}

function vol(param) {
    volEl.textContent = `${input} liters = ${(input*0.264).toFixed(3)} gallons | ${input} gallons = ${(input/0.264).toFixed(3)} liters`
}

function mass(param) {
    massEl.textContent = `${input} kilos = ${(input*2.204).toFixed(3)} pounds | ${input} pounds = ${(input/2.204).toFixed(3)} kilos`
}

