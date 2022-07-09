const prompt = require("prompt-sync")()

const numeros = []

console.log("Informe os números ou 0 para sair")

do {

    const num = Number(prompt("Número: "))

    if (num == 0) {
        break
    }

    numeros.push(num)

} while (true)

console.log("\nLista dos Pares")

console.log("-".repeat(30))

let contador = 0

for (let i = 0; i < numeros.length; i++) { 

    if (numeros[i] % 2 == 0) {

        console.log(numeros[i])

        contador++

    }
}

console.log("-".repeat(30))
console.log(`${contador} pares`)