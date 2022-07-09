const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let resposta = ""
for (let i = 2; i <= num; i = i + 2) {
resposta = resposta + i + " "
}

console.log(`Pares até ${num}: ${resposta}`)

let resposta2 = ""
for (let i = 1; i <= num; i++) {
if (i % 2 !== 0) {
resposta2 = resposta2 + i + " "
}
}
console.log(`Impares até ${num}: ${resposta2}`) 



// ouuuuu



/*
const prompt = require("prompt-sync")()



const numero = Number(prompt("Número: "))



let resposta = ""



for (let i = 1; i <= numero; i++) {

    resposta = resposta + i + ", "

}



for (let i = numero-1; i >= 2; i--) {

    resposta = resposta + i + ", "

}



resposta = resposta + "1"



console.log(`Contagem: ${resposta}`)
 */