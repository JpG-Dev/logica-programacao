const prompt = require("prompt-sync")()

const num = Number(prompt(`Número: `))


for(i = num; i >= 5; i = i + 1){
console.log(`${}`)
}