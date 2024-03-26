/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

2 - Escreva um programa que receba três números inteiros 
e mostre eles em ordem DECRESCENTE. (10 pontos)
*/

const teclado =require(`prompt-sync`)();

let n1: number = parseFloat(teclado(`digite um numero:`));
let n2: number = parseFloat(teclado(`digite um numero: `));
let n3: number = parseFloat(teclado(`digite um numero: `));

let maior: number = 0;
let mediano: number = 0;
let menor: number = 0;

if (n1 < n2 && n1 < n3){
    menor=n1;

    if ( n2 > n3 ){
        mediano=n3;
        maior=n2;
    }
}
else {
    mediano=n3;
    maior= n2;
}

if (n2 < n1 && n2 < n3){
    menor=n2;

    if ( n1 > n3 ){
        mediano=n3;
        maior=n1;
    }
}
else {
    mediano=n3;
    maior= n1;
}

if (n3 < n1 && n3 < n2){
    menor=n3;

    if ( n1 > n2 ){
        mediano=n2;
        maior=n1;
    }
}

 else {
    mediano=n2;
    maior= n1;
}


console.log(`os numeros em ordem decrescente sao: ${n3}, ${n2} e ${n1}`)

