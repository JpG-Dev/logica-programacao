const prompt = require("prompt-sync")()

const nome = prompt(`Informe o nome do candidato: `);
const acertos = Number(prompt(`Informe o número de acertos: `));

if(acertos >=20 &&  acertos <=30){
    console.log(`${nome}, você deve realizar um teste complementar`)
} else if(acertos < 20){
    console.log(`${nome}, você reprovou!`)
} else if(acertos > 30){
    console.log(`${nome}, você está aprovado para a segunda fase`)
}