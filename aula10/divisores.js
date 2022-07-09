const prompt = require("prompt-sync")()

const num =  Number(prompt(`Número: `))

let resposta = ""

for (let i = 1; i <= num; i++){
    if (num % i == 0){
    resposta = resposta + i + `, `
    }
}
console.log(`Divisores do ${num}: ${resposta}`)