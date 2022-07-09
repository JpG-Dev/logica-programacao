const prompt = require("prompt-sync")();

const produto = prompt(`Informe o Produto: `);
const valor = Number(prompt(`Informe o valor: `));

const promocao = (valor *2) + (valor * 0.5);

console.log(`Promoção - ${produto}!`);
console.log(`--------------------------`);
console.log(`Leve 3 por apenas R$: ${promocao}`);
console.log(`O 3 custa só R$: ${valor * 0.5}!`);