const prompt = require("prompt-sync")()

const pacientes = Number(prompt(`Informe o número de pacientes: `));


if (pacientes <= 5){
    console.log(`Dentista A: ${pacientes} `);
} else if (pacientes > 5){
    let dentA = pacientes / 2
    let dentB = pacientes / 2
    console.log(`Dentista A: ${Math.floor(dentA)} pacientes`);
    console.log(`Dentista B: ${Math.ceil(dentB)} pacientes`);

}