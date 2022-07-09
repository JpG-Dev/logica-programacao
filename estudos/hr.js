const prompt = require("prompt-sync")()

const horabr = Number(prompt(`Informe a hora no Brasil: `));

let horafr = horabr + 5;

if (horafr > 24){

    horafr = horafr - 24;
}

console.log(`A hora na França é: ${horafr}`)



