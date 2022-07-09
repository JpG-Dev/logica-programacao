const prompt = require("prompt-sync")()

const num = Number(prompt("Numero:  "))

console.log(`\nContagem regressiva: `)

for(let i = num; i >= 1; i--){
    console.log(`${i}`)
}
console.log(`Fogo!`)