const prompt = require("prompt-sync")();

const conta = Number(prompt("Valor da conta R$: "));
const num = Number(prompt("Número de Clientes: "));

const valorPessoa = conta / num

console.log(`Valor por pessoa R$: ${valorPessoa.toFixed(2)} `);
