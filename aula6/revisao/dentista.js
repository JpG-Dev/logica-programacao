const prompt = require("prompt-sync")();

const pacientes = Number(prompt(`Número de pacientes: `))


if (pacientes <= 5) {
    console.log(`Dentista A: ${pacientes}`)
} else {
    const dentA = Math.floor(pacientes / 2)
    const dentB = Math.ceil(pacientes / 2)
    console.log(`Dentista A: ${dentA}`)
    console.log(`Dentista B: ${dentB}`)
}