const prompt = require("prompt-sync")();

const produto = prompt("Produto: ");
const preco = Number(prompt("Preço R$: "));

const avista = preco - (preco * 0.10);
const parcela = preco / 3;

console.log(`Promoção de ${produto}`);
console.log(`-----------------------`);
console.log(`À Vista R$: ${avista.toFixed(2)}`);
console.log(`Ou em 3x de R$: ${parcela.toFixed(2)}`);

