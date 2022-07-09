const prompt = require("prompt-sync")()

const alunos = []
const notas = []

do {
    const x = prompt("Nome do Aluno: ")
    const y = Number(prompt("Nota: "))

    alunos.push(x)
    notas.push(y)

    const continua = prompt("Continua (S/N): ")

    
    if (continua == "N" || continua == "n") {
        break
    }

} while (true)

console.log("\nLista de Alunos da Turma")

console.log("-".repeat(40))

for (let i = 0; i < alunos.length; i++) {

    if (notas[i] >= 7){
        console.log(`${alunos[i]}, aprovado`)
    }else{
        console.log(`${alunos[i]}, reprovado`)
    }

    console.log(`${alunos[i]} - ${notas[i].toFixed(1)}`)
}




