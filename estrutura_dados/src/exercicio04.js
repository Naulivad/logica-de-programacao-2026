import leia from "readline-sync"
import { pedirNumeros } from "./utils/pedirNumeros.js";

//3
export function exercicio04(){
console.log("---EXERCICIO 04---")

var numeros = pedirNumeros(15);
var maiores = []

    for (var i = 0; i < numeros.length; i ++){
        if(numeros[i] >= 10){
            maiores[i] = numeros[i]
         }
         
         
         console.log("Numeros maiores ou iguais a 10 : " + maiores[i])
         
         
         }
         
         }
         
         exercicio04()