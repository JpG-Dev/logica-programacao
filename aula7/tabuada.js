const prompt = require("prompt-sync") ();

const num = Number(prompt("Número: "))

console.log(`\nTabuada do ${num}`)
console.log("=".repeat(30))

for (let i = 1; i <= 10; i = i+1){
console.log(`${num} x ${i} = ${num*i}`)
}
console.log("=".repeat(30))