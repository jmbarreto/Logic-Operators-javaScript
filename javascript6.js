
const prompt = require('prompt-sync')();

const x1Texto = prompt('x1 = ');
const x1 = Number(x1Texto);
const y1Texto = prompt('y1 = ');
const y1 = Number(y1Texto);
const x2Texto = prompt('x2 = ');
const x2 = Number(x2Texto);
const y2Texto = prompt('y2 = ');
const y2 = Number(y2Texto);

const n1 = Math.pow(x2-x1, 2);
const n2 = Math.pow(y2-y1, 2);
const d = Math.sqrt(n1+n2);

console.log(`A distância entre o p1(${x1},${y1}) e o p2(${x2},${y2}) é de ${Math.round(d)}`)