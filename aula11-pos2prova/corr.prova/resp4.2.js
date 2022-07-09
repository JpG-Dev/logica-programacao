const prompt = require("prompt-sync")()



let filiais = Number(prompt("Número de Filiais em 2022: "))

const ano = Number(prompt("Projeção Até: "))



console.log(`\nNúmero de Filiais Previstas até ${ano}`)

console.log("-".repeat(45))



for (let i = 2023; i <= ano; i++) {

    filiais = filiais * 2

    console.log(`${i}: ${filiais} lojas`)

}