/*
Faça um sistema que leia as 3 notas de um aluno e calcule a média
 final deste aluno. Considerar que a média é ponderada e que o 
 peso das notas é: 2,3 e 5, respectivamente. 
*/
const prompt = require ('prompt-sync')()
const nota1Texto = prompt('entre com a 1º  nota: ');
const nota1 = Number (nota1Texto);
const nota2Texto = prompt ('entre com a 2º nota: ');
const nota2 = Number(nota2Texto);
const nota3Texto = prompt('entre com a 3º nota: ');
const nota3 = Number(nota3Texto);  
const mediaNotas =  (nota1*2+nota2*3+nota3*5)/10


console.log(`A média total foi de ${mediaNotas}`)
