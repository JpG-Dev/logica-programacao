const prompt = require("prompt-sync")();

const modelo = prompt(`Modelo do veículo: `);
const avaliacao = Number(prompt(`Valor da Avaliação R$: `));
const ano = Number(prompt(`Ano de Fabricação: `));

const valorSeg = avaliacao * 0.04
const descAno = (2022 - ano);
const desconto = descAno * 50;
const pagar = valorSeg - desconto;

console.log(`Proposta de seguro ${modelo}`);
console.log(`---------------------------`);
console.log(`Valor do Seguro R$: ${valorSeg.toFixed(2)}`);
console.log(`Valor do desconto R$: ${desconto.toFixed(2)}`);
console.log(`Valor a pagar R$: ${pagar.toFixed(2)}`);
