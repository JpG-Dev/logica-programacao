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



console.log("\nLista de Alunos Aprovados")
console.log("-".repeat(40))

for (let i = 0; i < alunos.length; i++) {

    if (notas[i] >= 7) {
        console.log(`${alunos[i]} - ${notas[i].toFixed(1)}`)
    }

}
console.log("\nLista de Alunos Reprovados")
console.log("-".repeat(40))

for (let i = 0; i < alunos.length; i++) {
    if (notas[i] < 7) {
        console.log(`${alunos[i]} - ${notas[i].toFixed(1)}`)
    }

}