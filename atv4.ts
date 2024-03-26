/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

4 - Escreva um programa que leia as medidas dos lados de um triângulo e 
escreva se ele é Equilátero, isósceles ou Escaleno. Sendo que:
− Triângulo Equilátero: possui os 3 lados iguais.
− Triângulo Isóscele: possui 2 lados iguais.
− Triângulo Escaleno: possui 3 lados diferentes.

(10 pontos)
*/

const teclado = require(`prompt-sync`)();

let lado1: number = parseFloat(teclado(`digite a medida do lado 1: `));
let lado2: number = parseFloat(teclado(`digite a medida do lado 2: `));
let lado3: number = parseFloat(teclado(`digite a medida do lado 3: `));

if (lado1 == lado2 && lado1== lado3 && lado2 == lado3){
    console.log(`ele e um triangulo equilatero`);
}
else if(lado1 == lado2 || lado1== lado3 || lado2 == lado3){
    console.log(`ele e um triangulo isosceles`);
}
else {
    console.log(`ele e um triangulo escaleno`);
}