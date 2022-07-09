const prompt = require(`prompt-sync`)()

const produtos = []
const precos = []

do {
    const x = prompt(`Produto: `)
    const y = Number(prompt(`Preço: `))

    produtos.push(x)
    precos.push(y)

    const continua = prompt(`Continuar (S/N): `)
    if (continua == "N" || continua == "n") {
        break
    }

} while (true)

console.log(`\nLista de compras`)
console.log(`-`.repeat(40))

const tam = produtos.length
let soma = 0 

for (let i = 0; i < tam; i++){
    console.log(`${produtos[i].padEnd(20)} - R$: ${precos[i].toFixed(2)}`)
    soma = soma + precos[i]
}
console.log("-".repeat(40))
console.log(`Total das compras R$: ${soma.toFixed(2)}`)