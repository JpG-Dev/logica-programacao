const prompt = require("prompt-sync")()

console.log(`Campanha de Vacinação`);
console.log(`-`.repeat(30));
let quantidade = 0;
let frascos = 0;
let soma = 0;


do {
    const crianca = prompt(`Criança: `)
    quantidade = quantidade + 1

    const gotas = Number(prompt(`Nº de gotas: `))
    soma = soma + gotas
   if(gotas >= 30 ){
       frascos = frascos + 1
   }

    console.log(`${crianca}, vacinado(a) com ${gotas} gotas`)

    const continua = prompt(`Continuar(S/N): `)

    if (continua == "N" || continua == "n"){
        break
    }


} while (true);
console.log(`-`.repeat(30));
console.log(`Crianças vacinadas: ${quantidade}`)
console.log(`Total de gotas: ${soma}`)
console.log(`Nº de frascos abertos: ${frascos}`)
