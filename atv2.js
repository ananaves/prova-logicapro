/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

2 - Escreva um programa que receba três números inteiros
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite um numero:"));
var n2 = parseFloat(teclado("digite um numero: "));
var n3 = parseFloat(teclado("digite um numero: "));
var maior = 0;
var mediano = 0;
var menor = 0;
if (n1 < n2 && n1 < n3) {
    menor = n1;
    if (n2 > n3) {
        mediano = n3;
        maior = n2;
    }
}
else {
    mediano = n3;
    maior = n2;
}
if (n2 < n1 && n2 < n3) {
    menor = n2;
    if (n1 > n3) {
        mediano = n3;
        maior = n1;
    }
}
else {
    mediano = n3;
    maior = n1;
}
if (n3 < n1 && n3 < n2) {
    menor = n3;
    if (n1 > n2) {
        mediano = n2;
        maior = n1;
    }
}
else {
    mediano = n2;
    maior = n1;
}
console.log("os numeros em ordem decrescente sao: ".concat(n3, ", ").concat(n2, " e ").concat(n1));
