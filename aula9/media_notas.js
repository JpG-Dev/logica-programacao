const prompt = require("prompt-sync")()
// contador e acumulador

let quantidade = 0

let soma = 0

console.log("Informe o nome do aluno ou 'Fim' para sair")

do {

    const nome = prompt("Nome do aluno: ")

    if (nome == "Fim") {
        break
    }

    const nota = Number(prompt("Nota: "))
    quantidade = quantidade + 1
    soma = soma + nota

} while (true)

// realiza o cálculo e exibe a resposta
const media = soma / quantidade

console.log("-".repeat(40))

console.log(`Média das notas da turma: ${media.toFixed(1)}`)
