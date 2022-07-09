const prompt = require("prompt-sync")()


do {
    console.log("Digite o nome do funcionário ou (fim) para sair! ")
    let A = "--";
    let a = A.repeat(30);
    console.log(a)

    const funcionario = prompt(`Funcionário: `)
    if (funcionario == "fim"){
        break
    }
    const salario = Number(prompt(`Salário: `))

    let salarioNovo = salario + (salario * 0.2);

    console.log(`Novo Salário R$: ${salarioNovo}`)


} while (true);



