const prompt = require("prompt-sync")()

let soma = 0

const lojas = Number(prompt("Nº de Filiais em 2022: "))
const ano = Number(prompt("Projeção: "))



console.log("=".repeat(30))

for (let i = 2022; i <= ano; i = i + 1) {
    console.log(`${i}: ${soma}`)
    let dobro = lojas * i;
}