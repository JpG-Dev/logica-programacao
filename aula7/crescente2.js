const prompt = require("prompt-sync") ();

const num = Number(prompt("Número: "))

console.log(`\nNúmeros entre 1 e ${num}: `)

let resposta = ""

for (let i=1; i <= num; i = i++) {
    resposta = resposta + i + " ";
}
console.log(`\nNúmeros entre 1 e ${num}: ${resposta}`)