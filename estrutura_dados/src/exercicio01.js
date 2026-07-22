import leia from "readline-sync"
import { pedirNumeros } from "./utils/pedirNumeros.js";

//3
export function exercicio01(){
console.log("---EXERCICIO 01---")

var numeros = pedirNumeros(10);
var numulti = [];
for (var i = 0; i < numeros.length; i ++){
    numulti[i] = numeros[i] * 5 
}

console.log("numeros: " + numeros + " X 5 " + numulti)
}