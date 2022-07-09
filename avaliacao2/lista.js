const prompt = require ('prompt-sync')()

const num = 0
const alunos = []



console.log(`-`.repeat(40))

do {
    const fim = prompt("Informe o nome dos alunos ou Fim para sair")
    if (fim == "Fim" || fim == "fim") {
    break
    }
    alunos.push(num)
    } while (true)


for (let i=0; i <= alunos; i++){
    alunos[i] = prompt(`${i+1}º aluno: `)
}


const grupo = Number(prompt(`Formar Grupos de Quantos alunos: `))
console.log(`\n Grupos: `)
console.log(`\n-`.repeat(40))

for(let i = 0; i <= alunos; i = i + 2){
    console.log(`${alunos[i]} x ${alunos[i+1]}`)
}