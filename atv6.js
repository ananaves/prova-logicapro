/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

6- Um posto está vendendo combustíveis com a seguinte tabela de descontos:
    Álcool: até 20 litros, desconto de 3% por litro
    acima de 20 litros, desconto de 5% por litro
    Gasolina:
    até 20 litros, desconto de 4% por litro
    acima de 20 litros, desconto de 6% por litro

Escreva um algoritmo que leia o número de litros vendidos,
o tipo de combustível (codificado da seguinte forma: E-etanol, G-gasolina),
calcule e imprima o valor a ser pago pelo cliente sabendo-se que
o preço do litro da gasolina é R$ 5,58 o preço do litro do
etanol é R$ 3,42.

(25 pontos)
*/
var teclado = require("prompt-sync")();
var opcao = (teclado("digite e para etanol e g para gasolina:"));
if (opcao == "g" || opcao == "G") {
    var litrosGasolina = parseFloat(teclado("digite quantos litros de gasolina:"));
    var valorgasolina = 5.58;
    var desconto = litrosGasolina * valorgasolina;
    if (desconto > 111.6) {
        console.log("desconte \u00E9 de 5%");
        if (desconto < 111.6 || desconto == 111.6)
            console.log("o desconto \u00E9 de 3%");
    }
}
if (opcao == "e" || opcao == "E") {
    var litrosetanol = parseFloat(teclado("digite quantos litros de etanol:"));
    var valoretanol = 3.42;
}
