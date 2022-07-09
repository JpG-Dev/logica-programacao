const prompt = require("prompt-sync")();

const nome = prompt(`Informe o nome do aluno: `);
const ano = Number(prompt(`Informe o ano de nascimento: `));

const calc = 2022 - ano;

console.log(`Idade: ${calc}`);

    if (ano <= 2004){
        console.log("Você é maior de idade!");
    } else {
        console.log("Você não é maior de idade!");
    }



