

//Ajustar o programa da média dos alunos, para receber nome e conceito do aluno. 
//Sabendo que os conceitos A, B e C aprovam e que D, reprova,  informe ao final quantos alunos foram aprovados e quantos foram reprovados.


const prompt = require("prompt-sync")()
// contador e acumulador

let somaA = 0
let somaR = 0

console.log("Informe o nome do aluno ou 'Fim' para sair")

do {

    const nome = prompt("Nome do aluno: ")

    if (nome == "Fim") {
        break
    }
    const conceito = prompt("Conceito: ")

    if(conceito == "D"){
        somaR = somaR + 1;
        console.log(`Voce foi reprovado`)
        

    }else if(conceito == "A" || conceito == "B" || conceito == "C"){
        somaA = somaA + 1;
        console.log(`Voce foi aprovado`)
        
    }

} while (true)

console.log("-".repeat(40))

console.log(`Aprovados ${somaA}`)
console.log(`Reprovados ${somaR}`)

