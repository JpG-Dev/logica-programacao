const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const valor = Number(prompt("Valor R$: "))

console.log(`Opções de pagamento: `)
console.log("-".repeat(30))


for (let i = 1; i <= 10; i++){
    let soma = (Math.floor(valor/i))
    console.log(`${i} x ${valor} = ${soma.toFixed(2)}`)
    }
