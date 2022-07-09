const prompt = require("prompt-sync")()

const palavra = prompt("Palavra:  ")
const num = Number(prompt("Numero:  "))

let resposta = ""

for(let i = 1; i < num ; i++){
    resposta = resposta + palavra + " * "
}
console.log(`${resposta}${palavra}`)
