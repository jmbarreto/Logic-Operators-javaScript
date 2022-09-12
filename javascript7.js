
/*
O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem 
do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a porcentage
m do distribuidor seja de 28% e os impostos de 45%, escrever um sistema que leia o custo de
 fábrica de um carro e escreva o custo ao consumidor
*/
const prompt = require('prompt-sync')();
const valorCarro = prompt('car price: ')
const valor = Number(valorCarro)
const impostos = valor * 45/100
const distribuidor = valor * 28/100
const valorFinal= custoFabrica + impostos + distribuidor

console.log (`o valor final é de ${valorFinal}`)
