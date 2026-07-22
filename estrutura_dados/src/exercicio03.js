import leia from "readline-sync"
import { pedirNumeros } from "./utils/pedirNumeros.js";

//3
export function exercicio03(){
console.log("---EXERCICIO 03---")

var numeros = pedirNumeros(10);
for (var i = 0; i < numeros.length; i ++){
    if(numeros[i] % 2 === 0) {
        console.log(numeros[i])
    }
}
    
}