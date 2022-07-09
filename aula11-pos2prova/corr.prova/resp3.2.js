const prompt = require("prompt-sync")()



const poltronas = Number(prompt("Nº de Poltronas: "))



let resposta = ""



for (let i = 1; i <= poltronas; i++) {

    resposta = resposta + i + " "

    if (i % 4 == 0) {

        resposta = resposta + "\n"

    }

}



console.log("\nFilas dos Assentos")

console.log("-----------------------")

console.log(resposta)



// ----------------------------------------------

// Outra forma



let resposta2 = ""



console.log("\n\nFilas dos Assentos")

console.log("-----------------------")



for (let i = 1; i <= poltronas; i++) {

    resposta2 = resposta2 + i + " "

    if (i % 4 == 0) {

        console.log(resposta2)

        resposta2 = ""

    }

}



if (poltronas % 4 != 0) {

    console.log(resposta2)

}