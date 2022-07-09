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