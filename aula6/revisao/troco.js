const prompt = require("prompt-sync")();

const valor = Number(prompt(`Informe o valor da compra: `))
const pago  = Number(prompt(`Informe o valor pago: `))

let troco =  pago - valor;

if (valor > pago){
    console.log(`Ops, falou R$: ${troco.toFixed(2)}`)
}
 else if (troco == 0){
    console.log(`Obrigado, volte sempre!`)
} else if (valor < pago){
    console.log(`Troco R$: ${troco.toFixed(2)}`)
} 