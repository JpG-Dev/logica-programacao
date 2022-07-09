const prompt = require("prompt-sync")()

let continua 

do{
const nome = prompt(`Nome do aluno: `)
const nota = Number(prompt(`Nota: `))

if(nota >= 7){
    console.log(`Parabens, ${nome} aprovou!`)
} else{
    console.log(`Opss, ${nome}, reprovou!`)
}
continua = prompt(`Deseja Continuar (S/N): `)
} while (continua == "S")

console.log("Bye, bye ...")