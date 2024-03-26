/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

1- Faça um programa que peça um número inteiro e 
determine se ele é par ou ímpar. (10 pontos)
*/

const teclado = require(`prompt-sync`)();

let divisor: number = 2;
let dividendo: number = parseFloat(teclado(`digite um numero inteiro: `));
let resto: number = 0;

resto = dividendo % divisor

if (resto == 0) {
    console.log(`numero digitado ${dividendo} é par!!`);
}


else if (resto == 1) {
    console.log(`numero digitado ${dividendo} é impar!!`);
}

else {
    console.log(`algo deu errado!`);
}





