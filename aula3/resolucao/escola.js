const prompt = require("prompt-sync")();

const aluno = prompt("Nome do Aluno: ");
const nota1 = Number(prompt("Primeira nota:"));
const nota2 = Number(prompt("Segunda nota:"));

const media = (nota1 + nota2)/2

console.log(`${aluno}, sua média é ${media.toFixed(1)}!`)