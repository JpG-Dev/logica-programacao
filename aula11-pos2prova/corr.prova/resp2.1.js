const prompt = require("prompt-sync")()



let continua 

let partidas = 0

let totalSets = 0



console.log("Campeonato de Tênis de Mesa")

console.log("-".repeat(20))



do {

    const jog1 = prompt("Jogador #1: ")

    const set1 = Number(prompt("Sets Vencidos: "))

    const jog2 = prompt("Jogador #2: ")

    const set2 = Number(prompt("Sets Vencidos: "))



    if (set1 > set2) {

        console.log(`${jog1} venceu o jogo por ${set1} x ${set2}`)

    } else {

        console.log(`${jog2} venceu o jogo por ${set2} x ${set1}`)

    } 



    partidas = partidas + 1

    totalSets = totalSets + set1 + set2



    continua = prompt("Continua (S/N): ")

    if (continua == "N" || continua == "n") {

        break

    }



} while (true)



console.log("-".repeat(20))

console.log(`Total de Partidas: ${partidas}`)

console.log(`Total de Sets Disputados: ${totalSets}`)