const prompt = require ("prompt-sync")()

const filmes = []
const generos = []
const duracoes = []

function incluir() {

    console.log("\nInclusão de filmes")
    console.log("-".repeat(40))

    const filme = prompt("Filme: ")
    const genero = prompt("Gênero: ")
    const duracao = Number(prompt("Duração em minutos: "))


    filmes.push(filme)
    generos.push(genero)
    duracoes.push(duracao)

    console.log("Filme Cadastrado com Sucesso...")

}

function listar() {

    console.log("\nListagem dos Filmes Cadastrados")
    console.log("-".repeat(40))

    console.log("\nNº Filme ........    Genero   Duração:")
    console.log("---------------------------------------")

    for (let i = 0; i < filmes.length; i++) {

        console.log(`${i + 1}º ${filmes[i].padEnd(18)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)
    }

}

function pesqGen(){
   
    console.log("\nPesquisa por gênero: ")
    console.log("-".repeat(40))

    const pesq = prompt(`Informe o gênero: `).toUpperCase()

    console.log("\nNº Filme ........    Gênero   Duração:")
    console.log("---------------------------------------")

    let existe = 0

    for (let i = 0; i < filmes.length; i++) {
        if(generos[i].toUpperCase().includes(pesq) == pesq){
        console.log(`${i + 1}º ${filmes[i].padEnd(18)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)
        existe = 1
        }
    }
    if(existe == 0) {
        console.log(`*Obs: Não há filmes do gênero ${pesq}`)
    }
}
function pesqTitulo(){
   
    console.log("\nPesquisa por título do filme: ")
    console.log("-".repeat(40))

    const palavra = prompt(`Informe a palavra-chave do título: `).toUpperCase()

    console.log("\nNº Filme ........    Gênero   Duração:")
    console.log("---------------------------------------")

    let existe = 0

    for (let i = 0; i < filmes.length; i++) {
        if(filmes[i].toUpperCase().includes(palavra)){
        console.log(`${i + 1}º ${filmes[i].padEnd(18)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)
        existe = 1
        }
    }
    if(existe == 0) {
        console.log(`*Obs: Não há filmes com a palavra ${palavra}`)
    }
}

function pesqDur(){
   
    console.log("\nPesquisa por duração: ")
    console.log("-".repeat(40))

    const maximo = Number(prompt(`Informe a duração máxima: `))

    console.log("\nNº Filme ........    Gênero   Duração:")
    console.log("---------------------------------------")

    let existe = 0

    for (let i = 0; i < filmes.length; i++) {
        if(duracoes[i] <= maximo){
        console.log(`${i + 1} ${filmes[i].padEnd(18)} ${generos[i].padEnd(15)} ${duracoes[i]} min`)
        existe = 1
        }
    }
    if(existe == 0) {
        console.log(`*Obs: Não há filmes com duração até ${maximo} min.`)
    }
}

function excluir(){

    listar()
   
    console.log("\nExclusão de Filmes ")
    console.log("-".repeat(40))

    const numExcluir = Number(prompt(`Número do filme a ser excluído (0 para retornar): `))
    
    if(numExcluir == 0){
        return //torna a mostrar o menu inicial
    }

    if(numExcluir > filmes.length){
        console.log(`Erro... Número inválido`)
        return
    }

    const excluido = filmes.splice(numExcluir -1, 1)
    generos.splice(numExcluir -1, 1)
    duracoes.splice(numExcluir -1, 1)

    console.log(`Ok! Filme ${excluido.toString()} removido com sucesso!`)
    
}

function alterar(){

    listar()
   
    console.log("\nAlterar duração do filme ")
    console.log("-".repeat(40))

    const numAlterar = Number(prompt(`Número do filme a ser alterado (0 para retornar): `))
    
    if(numAlterar == 0){
        return //torna a mostrar o menu inicial
    }

    if(numAlterar > filmes.length){
        console.log(`Erro... Número inválido`)
        return
    }
    
    const novaDur = Number(prompt(`Informe a nova duração: `))

    duracoes[numAlterar-1] = novaDur

    console.log(`Ok! Duração alterada para ${novaDur}min com sucesso!`)
    
}

function estatistica() {

    console.log("\nEstatística do Cadastro de Filmes")
    console.log("-".repeat(40))

    let soma = 0

    for (const duracao of duracoes) {
        soma = soma + duracao
    }

   /* for (let i = 0; i < duracoes.length; i++){
        soma = soma + duracoes[i]
    } */

    const num = filmes.length
    const media = soma / num


    console.log(`Nº de Filmes Cadastrados...: ${num}`)
    console.log(`Duração total dos filmes...: ${soma}`)
    console.log(`Duração média dos filmes...: ${media.toFixed(1)}`)

    const horas = Math.floor(soma / 60)
    const minutos = soma % 60

    console.log(`Total em horas e min...: ${horas}h e ${minutos}min `)
}

do {

    console.log("\nFilmes Avenida")
    console.log("-".repeat(40))
    console.log("1. Incluir filmes")
    console.log("2. Listar filmes")
    console.log("3. Pesquisar por título")
    console.log("4. Pesquisar por gênero")
    console.log("5. Pesquisar por duração")
    console.log("6. Excluir filmes")
    console.log("7. Estatística doos filmes cadastrados")
    console.log("8. ALterar duração")
    console.log("9. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {

        incluir()

    } else if (opcao == 2) {

        listar()

    } else if (opcao == 3) {

        pesqTitulo()

    } else if (opcao == 4) {

        pesqGen()

    } else if (opcao == 5) {

        pesqDur()

    } else if (opcao == 6) {

        excluir()

    } else if (opcao == 7) {

        estatistica()

    } else if (opcao == 8) {

        alterar()

    } else if (opcao == 9) {

        break

    } else {

        console.log("Opção Inválida...")

    }

} while (true)