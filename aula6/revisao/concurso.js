const prompt = require("prompt-sync")()



const nome = prompt("Nome do Candidato: ")

const acertos = Number(prompt("Nº de Acertos: "))



if (acertos < 20) {

    console.log(`${nome}, você foi reprovado do concurso`)

} else if (acertos <= 30) {

    console.log(`${nome}, você deve realizar um teste complementar`)

} else {

    console.log(`${nome}, você foi aprovado para a segunda fase`)

}