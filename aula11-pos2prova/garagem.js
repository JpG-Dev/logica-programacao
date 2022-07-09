const prompt = require(`prompt-sync`)()

const carros = []
const precos = []

function incluir(){

    const modelo = prompt("Modelo do veículo: ")
    const valor = Number(prompt("Informe o valor do veículo: "))
    carros.push(modelo)
    precos.push(valor)
    console.log("Carro inserido com sucesso!")
}

function listar(){
    console.log("\nLista de carros adicionados")
    console.log("\n=============================")

    for (let i = 0; i < carros.length; i++){
        console.log(`${carros[i]} R$: ${precos[i]}`)
        
    }
    
}

function somar (){
    let soma = 0;
    for (const preco of precos) {
        soma = soma + preco;
    }
    const num = carros.length
    const media = soma / num;
    console.log(`Nº de veículos cadastrados: ${num}`);
    console.log(`Soma dos valores: ${soma.toLocaleString("pt-br", {minimumFractionDigits:(2)})}`);
    console.log(`Média dos valores: ${media.toLocaleString("pt-br", {minimumFractionDigits:(2)})}`);
}

do {
    console.log("\nRevenda Avenida")
    console.log("=".repeat(30))
    console.log("1. Incluir Carros")
    console.log("2. Listar Modelos")
    console.log("3. Somar")


    const opcao = Number(prompt("Opção: "))

    if(opcao == 1){
    
        incluir()

    }else if(opcao == 2){

        listar()

    }else if(opcao == 3){

        somar ()
    }else {
        break
    }

} while(true)