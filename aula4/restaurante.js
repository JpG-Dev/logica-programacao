const prompt = require("prompt-sync")();

const valorkg = Number(prompt("Informe o valor do KG: "));
const gramas = Number(prompt("Informe quantas gramas: "));

const apagar = (valorkg / 1000) * gramas;





console.log(`O valor do KG é: ${valorkg}`);
console.log(`Gramas: ${gramas}`);
console.log(`O valor a pagar é R$: ${apagar.toFixed(2)}`);