/*
Nome 1: Ana Carolina M. Naves
Nome 2: Ana Julia S. Gomes
Nome 3: Maria Luiza Campos
Nome 4: Luis Otavio Bordin
Nome 5:

3- Faça um programa que pergunte em que turno você estuda. 
Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. 
Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou 
"Boa Noite!" ou "Valor Inválido!", conforme o caso. (10 pontos)
*/

const teclado= require(`prompt-sync`)();

let turno : string =(teclado(`em que turno voce estuda? 
digite M para matutino, V para Vespertino ou N para Noturno: `));

if (turno == `m` || turno == `M`){
    console.log(`bom dia!`);
}

else if ( turno == `v`|| turno == `V`){
    console.log(`boa tarde!`);
}

else if ( turno == `n` || turno == `N`){
    console.log(`boa noite!`);
}

else{
    console.log(`valor invalido!`);
}

