const prompt = require("prompt-sync")();


const horaBr = Number(prompt("Hora no Brasil: "))

let horaFr = horaBr + 5

if (horaFr > 24) {

    horaFr = horaFr - 24

}

console.log(`Hora na França: ${horaFr}`)
