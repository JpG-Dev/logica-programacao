const prompt = require("prompt-sync")()



// declaração dos vetores (array) competidores

const competidores = []

let num = 0



console.log("Informe os nomes ou 'Fim' para sair")



do {

    // lê a variável informada pelo usuário

    num++

    const x = prompt(`${num}º Competidor: `)



    if (x == "Fim") {

        break

    }

    

    // adiciona aos vetores

    competidores.push(x)

} while (true);



console.log("\nLista de Competidores")

console.log("-".repeat(40))



const tam = competidores.length



for (let i = tam-1; i >= 0; i--) {

    console.log(competidores[i])

}
