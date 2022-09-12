/*
Faça um sistema que leia o tempo de duração de um evento 
em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos. 
*/
const prompt = require ('prompt-sync')()
const segundos = prompt ('Digite quantos segundos o evento teve: ')
let totalSegundos = Number(segundos)
const horas = totalSegundos / 3600
const minutos = totalSegundos / 60
totalSegundos = totalSegundos/ 60

console.log(`o evento teve um total de horas de: ${horas}`)
console.log(`o total de minutos foi de: ${minutos}`)
console.log(`O total de segundos foi de: ${totalSegundos}`)