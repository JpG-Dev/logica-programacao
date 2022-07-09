const prompt = require (`prompt-sync`)()

const num = prompt(`Informe o número: `);
const simb = prompt(`Informe o símbolo: `);

let aux = " ";

for (let linha = 1; linha <= num; linha++) {
  for (let coluna = 1; coluna <= num; coluna++) {
    aux = aux + " " + simb;
  }
  console.log(aux);
  aux = " ";
}