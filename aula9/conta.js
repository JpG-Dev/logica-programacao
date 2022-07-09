const prompt = require("prompt-sync")()

   let total = 0;

do {
    const conta = prompt(`Conta: `)
    if (conta == "fim"){
        break
    }
    const valor = Number(prompt(`Valor: `))
  
    total = total + valor;

} while(true)
console.log(`-`.repeat(40))
console.log(`Total das Contas R$: ${total.toFixed(2)}`)