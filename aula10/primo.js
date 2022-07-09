const prompt = require("prompt-sync")()

const num =  Number(prompt(`Número: `))

let divisores = 0

for (let i = 1; i <= num; i++){
    if (num % i == 0){
    divisores = divisores + 1
    }
}

if(divisores == 2 ){
    console.log(`${num} é um número PRIMO`)
} else{
    console.log(`${num} não é um número primo...`)
}
