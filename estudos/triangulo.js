const prompt = require("prompt-sync")()

const base = Number(prompt(`Informe a base: `));
const altura = Number(prompt(`Informe a altura: `));

var area = base * altura


console.log(`A area do triangulo é: ${area}`)