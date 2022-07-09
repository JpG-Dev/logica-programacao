const prompt = require ('prompt-sync')()

console.log("Informe os 10 clubes ou 0 para sair")

const clubes = []

for (let i=0; i <+ 9; i++){
    clubes[i] = prompt(`${i+1}º clube: `)
}

console.log(`\n Lista de jogos`)

for(let i = 0; i<=9; i = i + 2){
    console.log(`${clubes[i]} x ${clubes[i+1]}`)
}
