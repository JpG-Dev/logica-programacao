const prompt = require(`prompt-sync`)()

const pacientes = []

function incluir(){

    console.log("\nInclusão de Pascientes\n")
    const nome = prompt("Nome do Paciente: ")
    pacientes.push(nome)
    console.log("Ok! Paciente inserido com sucesso!")
}

function listar(){
    console.log("\nPacientes na Fila de espera")
    console.log("\n=============================")

    for (const paciente of pacientes){
        console.log(paciente)
    }
}

function atender() {

    console.log("\nAtendimento de Paciente\n")

    if (pacientes.length == 0) {
        console.log("Obs.: * Não há pacientes para serem atendidos")
        return
    }
    const nome = pacientes.shift()
    console.log(`Paciente a ser atendido: ${nome}`)

}

function urgencia() {

    console.log("\nInclusão de Paciente com Urgência\n")
    const nome = prompt("Nome do Paciente: ")
    pacientes.unshift(nome)
    console.log("Ok! Paciente com Urgência inserido com sucesso")

}

do {
    console.log("\nConsultório Odontológico")
    console.log("=".repeat(30))
    console.log("1. Incluir Pacientes")
    console.log("2. Listar Pacientes")
    console.log("3. Atender")
    console.log("4. Incluir Urgência")

    const opcao = Number(prompt("Opção: "))

    if(opcao == 1){
    
        incluir()

    }else if(opcao == 2){

        listar()

    }else if(opcao == 3) {

        atender()

    }else if(opcao == 4){

        urgencia()

    }else {
        break
    }

} while(true)