const prompt = require ('prompt-sync')()
const atext = prompt ('digite o valor de A: ')
const a = Number(atext)
const btext = prompt ('digite o valor de B: ')
const b = Number (btext)
const ctext = prompt ('digite o valor de C: ')
const c = Number (ctext)
const r = Math.pow ((a + b) ,  2.0)
const s = Math.pow ((b + c) , 2.0)
const d = r+s/2

console.log(`o resultado é igual a: ${d}`)
