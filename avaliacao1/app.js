const prompt = require("prompt-sync")()

const distancia = Number(prompt(`Distância: `));
const hr = Number(prompt(`Horário: `));

if(hr >= 6 && hr <= 19){
    const valor = distancia * 2
    console.log(`Valor a pagar R$: ${valor.toFixed(2)}`);
} else {
    const valor = distancia * 3 
    console.log(`Valor a pagar R$: ${valor.toFixed(2)}`);
}