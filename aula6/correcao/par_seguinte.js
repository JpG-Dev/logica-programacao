const prompt = require("prompt-sync")

const num = Number(prompt("Numero: "))

if (num % 2 ==0 ){
	console.log(`Próximo par: ${num + 2}`)
} else {
	console.log(`Próximo `)
}

let proximo
if (num % 2 == 0){
    proximo = num + 2
} else{
    proximo = num + 1
}
console.log(`Próximo par: ${(proximo)}`)