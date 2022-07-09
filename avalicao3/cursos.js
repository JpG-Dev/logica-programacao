const prompt = require ("prompt-sync")()

const nomeCursos = []
const professores = []
const horas= []

function incluir() {

    console.log("\nInclusão de Cursos")
    console.log("-".repeat(40))

    const curso = prompt("Curso: ")
    const prof = prompt("Professor: ")
    const hora = Number(prompt("Horas certificadas: "))


    nomeCursos.push(curso)
    professores.push(prof)
    horas.push(hora)

    console.log("Curso Cadastrado com Sucesso...")

}

function listar() {

    console.log("\nListagem dos Cursos Cadastrados")
    console.log("-".repeat(40))

    console.log("\nNº Curso ........    Professor   Horas certificadas:")
    console.log("---------------------------------------")

    for (let i = 0; i < nomeCursos.length; i++) {

        console.log(`${i + 1}º ${nomeCursos[i].padEnd(18)} ${professores[i].padEnd(15)} ${horas[i]} hrs.`)
    }

}

function pesqProf(){
   
    console.log("\nPesquisa por Professor ")
    console.log("-".repeat(40))

    const pesq = prompt(`Informe o Professor Ministrante: `).toUpperCase()

    console.log("\nNº Curso ........    Professor   Horas certificadas:")
    console.log("---------------------------------------")

    let existe = 0

    for (let i = 0; i < nomeCursos.length; i++) {
        if(professores[i].toUpperCase() == pesq){
        console.log(`${i + 1}º ${nomeCursos[i].padEnd(18)} ${professores[i].padEnd(15)} ${horas[i]} hrs.`)
        existe = 1
        }
    }
    if(existe == 0) {
        console.log(`*Obs: Não há cursos ministrados por ${pesq}`)
    }
}
function pesqTitulo(){
   
    console.log("\nPesquisa por nome do Curso: ")
    console.log("-".repeat(40))

    const palavra = prompt(`Informe a palavra-chave do título: `).toUpperCase()

    console.log("\nNº Curso ........    Professor   Horas certificadas:")
    console.log("---------------------------------------")

    let existe = 0

    for (let i = 0; i < nomeCursos.length; i++) {
        if(nomeCursos[i].toUpperCase().includes(palavra)){
        console.log(`${i + 1}º ${nomeCursos[i].padEnd(18)} ${professores[i].padEnd(15)} ${horas[i]} hrs.`)
        existe = 1
        }
    }
    if(existe == 0) {
        console.log(`*Obs: Não há cursos com a palavra ${palavra} no título.`)
    }
}


function excluir(){

    listar()
   
    console.log("\nExclusão de Cursos ")
    console.log("-".repeat(40))

    const numExcluir = Number(prompt(`Número do curso a ser excluído (0 para retornar): `))
    
    if(numExcluir == 0){
        return 
    }

    if(numExcluir > nomeCursos.length){
        console.log(`Erro... Número inválido`)
        return
    }

    const excluido = nomeCursos.splice(numExcluir -1, 1)
    professores.splice(numExcluir -1, 1)
    horas.splice(numExcluir -1, 1)

    console.log(`Ok! Curso ${excluido.toString()} removido com sucesso!`)
    
}

function somar (){
    console.log("\nSoma das horas certificadas: ")
    console.log("-".repeat(40))

    let soma = 0;

for (let i = 0; i < horas.length; i++) {
    soma += horas[i];
}
console.log(`${soma} horas certificadas`);
}

function estatistica() {

    console.log("\nEstatística de horas/curso")
    console.log("-".repeat(40))

    let soma = 0

    for (const hora of horas) {
        soma = soma + hora
    }

   /* for (let i = 0; i < duracoes.length; i++){
        soma = soma + duracoes[i]
    } */

    const num = nomeCursos.length
    const media = soma / num


    console.log(`Nº de cursos Cadastrados...: ${num}`)
    console.log(`Duração total de horas...: ${soma}`)
    console.log(`Duração média de horas/curso...: ${media} horas`)
}

do {

    console.log("\nControle de Cursos Realizados:")
    console.log("-".repeat(40))
    console.log("1. Incluir curso")
    console.log("2. Listar cursos")
    console.log("3. Pesquisar por título")
    console.log("4. Pesquisar por professor")
    console.log("5. Excluir curso cadastrado")
    console.log("6. Somar horas certificadas")
    console.log("7. Estatística")
    console.log("8. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {

        incluir()

    } else if (opcao == 2) {

        listar()

    } else if (opcao == 3) {

        pesqTitulo()

    } else if (opcao == 4) {

        pesqProf()

    }  else if (opcao == 5) {

        excluir()

    } else if (opcao == 6){
        
        somar()

    } else if (opcao == 7){

        estatistica()
    } else if (opcao == 8){

        break

    } else {

        console.log("Opção Inválida...")

    }

} while (true)