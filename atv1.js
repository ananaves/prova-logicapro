/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

1- Faça um programa que peça um número inteiro e
determine se ele é par ou ímpar. (10 pontos)
*/
var teclado = require("prompt-sync")();
var divisor = 2;
var dividendo = parseFloat(teclado("digite um numero inteiro: "));
var resto = 0;
resto = dividendo % divisor;
if (resto == 0) {
    console.log("numero digitado ".concat(dividendo, " \u00E9 par!!"));
}
else if (resto == 1) {
    console.log("numero digitado ".concat(dividendo, " \u00E9 impar!!"));
}
else {
    console.log("algo deu errado!");
}
