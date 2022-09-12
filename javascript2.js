/*Faça um sistema que leia a idade de uma pessoa expressa em dias
 e mostre-a expressa em anos, meses e dias.
*/
const prompt = require ('prompt-sync')()
const idade = prompt ('Digite sua idade: ')
const idadeTotal = Number(idade)
const anos = idadeTotal / 365		
const meses = idadeTotal / 12
const totalDias = idadeTotal / 30
console.log(`Você tem um total de anos de ${Math.floor (anos)}`)
console.log(`Você tem um total de meses de ${Math.floor (meses)}`)
console.log(`você tem um total de dias de ${Math.floor (totalDias)} `)