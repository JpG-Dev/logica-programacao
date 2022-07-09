const prompt = require("prompt-sync")()

const disc = prompt(`Disciplina: `);
const trim1 = Number(prompt(`1 trimestre: `));
const trim2 = Number(prompt(`2 trimestre: `));
const trim3 = trim1 + trim2

console.log(`Soma dos pontos: ${trim3}`)

if( trim3 < 20 ){
    console.log(`Você está reprovado em ${disc}`)
}else if (trim3 >20 && trim3 < 60){
    let falta = 60 - Math.abs(trim3)
    console.log(`Você precisa de ${falta} pontos no trimestre em ${disc} para ser aprovado`)
} else if(trim3 >= 60){
    console.log(`Parabéns você já está aprovado em ${disc}!`)
}