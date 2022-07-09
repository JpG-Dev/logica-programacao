const prompt = require("prompt-sync")();

const num = Number(prompt("Número: "));

const vizinho1 = num -1;
const vizinho2 = num +1;

console.log(`Vizinhos do ${num}: ${vizinho1} e ${vizinho2}`);