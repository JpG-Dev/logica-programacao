const prompt = require("prompt-sync")()

// declara os vetores a serem utilizados no programa

const modelos = []
const precos = []

function incluir() {

    console.log("\nInclusão de Veículos")
    console.log("-".repeat(40))

    const x = prompt("Modelo: ")
    const y = Number(prompt("Preço R$: "))

    modelos.push(x)
    precos.push(y)

    console.log("Ok! Veículo Cadastrado com Sucesso...")

}


function listar() {

    console.log("\nListagem dos Veículos Cadastrados")
    console.log("-".repeat(40))

    console.log("\nNº Modelo do Veículo........ Preço R$.:")
    console.log("---------------------------------------")

    for (let i = 0; i < modelos.length; i++) {

        console.log(` ${i+1} ${modelos[i].padEnd(25)} ${(precos[i].toLocaleString("pt-br", {minimumFractionDigits: 2})).padStart(10)}`)

    }

}

function estatistica() {

    console.log("\nEstatística do Cadastro de Veículos")
    console.log("-".repeat(40))

    let soma = 0
    for (const preco of precos) {

        soma = soma + preco

    }

    const num = modelos.length
    const media = soma / num


    console.log(`Nº de Veículos Cadastrados...: ${num}`)
    console.log(`Soma dos Valores dos Veículos: ${soma.toLocaleString("pt-br", {minimumFractionDigits: 2})}`)
    console.log(`Preço Médio dos Veículos.....: ${media.toLocaleString("pt-br", {minimumFractionDigits: 2})}`)

}

function promocao() {
    console.log("\nPromoção de Final de Semana")
    console.log("-".repeat(40))

    const desconto = Number(prompt("% de Desconto: "))

    console.log("\nNº Modelo do Veículo........ Preço R$.: Promoção R$")
    console.log("---------------------------------------------------")

    for (let i = 0; i < modelos.length; i++) {

        const prComDesconto = precos[i] - (precos[i] * desconto / 100)

        console.log(` ${i+1} ${modelos[i].padEnd(25)} ${(precos[i].toLocaleString("pt-br", {minimumFractionDigits: 2})).padStart(10)} ${(prComDesconto.toLocaleString("pt-br", {minimumFractionDigits: 2})).padStart(11)}`)
    }
}

function destaque() {

    console.log("\nVeículo(s) em Destaque")
    console.log("-".repeat(40))

    let maior = 0

    for (const preco of precos) {
        if (preco > maior) {
            maior = preco
        }
    }
    console.log(`Maior Valor R$: ${maior.toLocaleString("pt-br", {minimumFractionDigits: 2})}`)
    console.log("---------------------------")


    for (let i = 0; i < modelos.length; i++) {
        if (precos[i] == maior) {
            console.log(modelos[i])
        }
    }
}

// -------------------------------------------------- Programa Principal

do {

    console.log("\nRevenda Avenida - Controle de Veículos")
    console.log("-".repeat(40))
    console.log("1. Incluir Veículos")
    console.log("2. Listar Veículos")
    console.log("3. Estatística dos Veículos Cadastrados")
    console.log("4. Promoção Final de Semana")
    console.log("5. Veículos em destaque")
    console.log("6. Finalizar")
    const opcao = Number(prompt("Opção: "))

    if (opcao == 1) {

        incluir()

    } else if (opcao == 2) {

        listar()

    } else if (opcao == 3) {

        estatistica()

    } else if (opcao == 4) {

        promo()

    } if(opcao == 5){

        destaque()

    } if(opcao == 6){
        
        break
    }
    else {

        console.log("Opção Inválida...")

    }

} while (true)