import leia from 'readline-sync'
import { pedirNumeros } from "../utils/pedirNumeros.js";

export function exercicio05(){

var numeros = pedirNumeros(10)
var inverso = []


console.log("LISTA ORIGINAL!")
console.log(numeros)

for(var i = numeros.length - 1; i >= 0; i--){

inverso.push(numeros[i])

}
console.log("---INVERTIDO---")
console.log(inverso)


console.log("-----Detlhes da Inversão!!!-----")
for (var i = 0; i < numeros.length; i++){
    
    

}

}


exercicio05()