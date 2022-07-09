const prompt = require("prompt-sync")()



let continua 

let totalCriancas = 0

let totalGotas = 0



console.log("Campanha de Vacinação")

console.log("-".repeat(20))



do {

    const crianca = prompt("Criança: ")

    const gotas = Number(prompt("Nº Gotas: "))



    console.log(`${crianca} vacinado(a) com ${gotas} gotas`)



    totalCriancas = totalCriancas + 1

    totalGotas = totalGotas + gotas



    continua = prompt("Continua (S/N): ")

    if (continua == "N" || continua == "n") {

        break

    }

} while (true)



console.log("-".repeat(20))

console.log(`Crianças Vacinadas: ${totalCriancas}`)

console.log(`Total de Gotas: ${totalGotas}`)



const frascos = Math.ceil(totalGotas / 30)

console.log(`Nº de Frascos Abertos: ${frascos}`)


