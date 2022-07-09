const prompt = require("prompt-sync")()

const end = prompt(`Informe o endereço: `);
const area = Number(prompt(`Informe a área construída: `));

console.log(`O imóvel da ${end} possui ${area} metros quadrados.`)