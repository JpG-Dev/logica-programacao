const prompt = require("prompt-sync")()

const nome = prompt(`Convidado: `);
const doacao = Number(prompt(`Doação: `));

if(doacao < 100){
    console.log(`${nome}, as bebidas são por sua conta!`);
} else{
    console.log(`${nome}, as bebidas são por conta do evento!`);
}