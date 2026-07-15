import leia from 'readline-sync'

// var numero = leia.questionInt("digite um numero ")
// var binario = " "

// while(numero > 0){
//     binario = (numero % 2) + binario
//     numero = Math.floor(numero / 2);
// }

// console.log("BINARIO: " + binario)

var nummero = leia.questionInt("QUAL O NUMERO? ")

console.log(nummero.toString(2) + " binario") 
console.log(nummero.toString(16) + " hexadecimal") 
console.log(nummero.toString(8) + " octnal")

