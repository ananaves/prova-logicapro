/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin:
Nome 5:

5 -O IMC (índice de massa corpórea) indica o grau de obesidade de uma pessoa.
Este índice é obtido pelo peso (em Kg) dividido pelo quadrado da altura
(em metros). A tabela a seguir apresenta as faixas deste índice:
 __________________________________________
|====== IMC ======= |===== Avaliação ===== |
| Menor que 18,5    | Baixo peso           |
| De 18,5 a 24,99   | Normal               |
| De 25 a 29,99     | Sobrepeso            |
| Maior que 30      | Obesidade            |
|___________________|______________________|

(25 pontos)
*/
var teclado = require("prompt-sync")();
var kg = parseFloat(teclado("digite seu seu peso em kg:"));
var metros = parseFloat(teclado("digite sua altura em metros:"));
var imc;
imc = kg / (metros * metros);
if (imc < 18.5) {
    console.log("baixo peso");
}
else if (imc >= 18.5 && imc <= 24.99) {
    console.log("normal");
}
else if (imc >= 25 && imc <= 29.99) {
    console.log("sobrepeso");
}
else {
    console.log("obesidade");
}
