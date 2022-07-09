const prompt = require("prompt-sync") ();

const num = Number(prompt("Número: "))

console.log(`\nNúmeros entre 1 e ${num}: `)

for(let i=1; i <= num; i = i + 1) {
console.log(i);
}