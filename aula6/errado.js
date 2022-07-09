const prompt = require("prompt-sync")()

const intervalo = prompt(`informe o numero: `)

if(intervalo >=20 && intervalo <=30){
    console.log(`${intervalo} Está no intervalo`)
}