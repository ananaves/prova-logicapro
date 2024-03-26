/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

7- Faça um aplicativo que ao pedir dois números efetue a soma,
   e pergunte se ele quer continuar calculando, caso sim volte
   a perguntar os números a ser somados, caso não o aplicativo
   é finalizado.  (10 pontos)
*/
var teclado = require("prompt-sync")();
var n1 = parseFloat(teclado("digite o primeiro numero:"));
var n2 = parseFloat(teclado("digite o segundo numero:"));
var soma = n1 + n2;
console.log("a soma \u00E9 igual a: ".concat(soma));
var cont = parseFloat(teclado("deseja continuar calculando?"));
var contSN = parseFloat(teclado("sim ou nao:"));
