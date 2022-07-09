const prompt = require("prompt-sync")();

const cidade = prompt(`Informe o nome da cidade: `);
const dias = Number(prompt(`Quantos dias de viagem? `));
const horas = Number(prompt(`Número de horas: `));

const totalDias = dias * 24;
const total = totalDias + horas;

console.log(`Total da viagem para ${cidade}: ${total} `);