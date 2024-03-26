/*
Nome 1:Luís Otávio Bordin Pereira
Nome 2:Ana Carolina Menegheli Naves
Nome 3: Ana Julia Souza 
Nome 4: Maria Luisa Campos 

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

const teclado = require(`prompt-sync`)();

let opcao: string = (teclado(`Digite E para Etanol e G para gasolina: `));

let litros: number = 0;
let vVenda: number = 0;
let vTotal: number = 0;

 if (opcao == `E` || opcao == `e`){
    let litros: number = parseFloat(teclado(`Quantos litros foram vendidos? `));

    if (litros <=20){
        vVenda = (3.42 * litros);
        vTotal = vVenda - (vVenda * 0.03);
        console.log (`O cliente precisa pagar ${vTotal}`);
    }

     else if (litros > 20){
        vVenda = (3.42 * litros);
        vTotal = vVenda - (vVenda * 0.05);
        console.log (`O cliente precisa pagar ${vTotal}`);
    }
     else{
        console.log (`Algo deu errado!`)
    }
}

     else if (opcao == `G` || opcao == `g`) {
    let litros: number = parseFloat(teclado(`Quantos litros foram vendidos? `));

    if (litros <= 20){
        vVenda = (5.58 * litros);
        vTotal = vVenda - (vVenda * 0.04);
        console.log (`O cliente precisa pagar ${vTotal}`);
    }

     else if (litros > 20){
        vVenda = (5.58 * litros);
        vTotal = vVenda - (vVenda * 0.06);
        console.log (`O cliente precisa pagar ${vTotal}`);
    }
     else{
        console.log (`Algo deu errado!!`)
    }
}