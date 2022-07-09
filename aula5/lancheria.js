const prompt = require("prompt-sync")();

const valor = Number(prompt("Valor do Lanche:"));
const bairro = prompt(`Bairro de Entrega:`);

let taxa = 5;

if(bairro == "Laranjal") {
    taxa = 10;
}

const total = valor + taxa;

console.log(`Valor com taxa de entrega: ${total.toFixed(2)}`);