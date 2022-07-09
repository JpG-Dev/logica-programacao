const prompt = require("prompt-sync")()



const num = Number(prompt("Número: "))



let divisores = 0



for (let i = 1; i < num; i++) {

    if (num % i == 0) {

        divisores = divisores + i

    }

}



console.log(`Soma dos Divisores é ${divisores}`)



if (divisores == num) {

    console.log(`Portanto, ${num} é um número PERFEITO!`)

} else {

    console.log(`Portanto, ${num} não é um número perfeito...`)

}