const prompt = require("prompt-sync")()
// contador e acumulador

let saldoNeg = 0

console.log("Digite o nome do cliente ou Fim para sair")

do {

    const nome = prompt("Nome do cliente: ")

    if (nome == "Fim") {
        break
    }
    const saldo = Number(prompt("Saldo R$: "))

if(saldo < 0){
    saldoNeg = saldoNeg +1;
}

}while (true)

console.log(`Nº de clientes com saldo negativo: ${saldoNeg}`)

if(saldoNeg == 0){
    console.log(`Não há clientes com saldo negativos`)
} else {
    console.log(`\nNº de clientes com saldo negativos: ${saldoNeg}`)
}