const prompt = require (`prompt-sync`)()



const num = prompt(`Informe o número`);
const simb = prompt(`Informe o símbolo: `);

var aux = "";

for (var linha = 1; linha <= num; linha++) {
  for (var coluna = 1; coluna <= num; coluna++) {
    aux += "*";
  }
  console.log(aux);
  aux = "";
}