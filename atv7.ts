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



let opcao: number = 0;

do{
    const teclado = require(`prompt-sync`)();

let n1: number = parseFloat(teclado(`digite o primeiro numero:`));
let n2: number = parseFloat(teclado(`digite o segundo numero:`));
let soma: number = n1+n2;

console.log(`a soma é igual a: ${soma}`);

console.log(`deseja continuar:`);
console.log(`1- continuar`);
console.log(`0- parae`);

opcao: parseInt(teclado(`Digite sua opção: `));
}while(opcao == 1) ;

console.log(`Fim de programa...`)






