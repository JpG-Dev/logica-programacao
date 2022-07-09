const prompt = require("prompt-sync")

const nome = prompt("Nome do Paciente: ");
const sexo = prompt("Sexo (M/F): ");
const altura = prompt("Altura: ");

let peso

if(sexo == "M"|| sexo == "F") {
    peso = (72.7 * altura) - 58
} else {
    peso = (62.1 * altura) - 44.7
}

console.log(`${nome}, seu peso ideal é: ${peso.toFixed(3)} kg`)