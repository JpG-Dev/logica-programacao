const prompt = require("prompt-sync")()



// declaração dos vetores (array) alunos

const alunos = []

let num = 0



console.log("Informe os nomes ou 'Fim' para sair")



do {

    // lê a variável informada pelo usuário

    num++

    const x = prompt(`${num}º Aluno: `)



    if (x == "Fim") {

        break

    }

    

    // adiciona aos vetores

    alunos.push(x)

} while (true);



const gruposDeQuantos = Number(prompt("Grupos de Quantos Alunos Formar? "))



console.log("\nLista de alunos")



const tam = alunos.length



for (let i = 0; i < tam; i++) {

    if (i % gruposDeQuantos == 0) {

        console.log("============================")

    }

    console.log(alunos[i])

}


