const prompt = require("prompt-sync")();

const conta = Number(prompt(`Informe o valor da conta: `));
const pago = Number(prompt(`Informe o valor pago: `));

let troco = conta - pago;

if( pago < conta){
    console.log(`Ops, faltou ${troco.toFixed(2)}`);
} else if ( pago == conta){
    console.log(`Obrigado, volte sempre!`)
}else if(pago > conta ){
    console.log(`Seu troco é R$: ${Math.abs(troco).toFixed(2)}`)
}