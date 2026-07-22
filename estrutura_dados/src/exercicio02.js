import leia from "readline-sync"
import { pedirNumeros } from "./utils/pedirNumeros.js";

//3
export function exercicio02(){
console.log("---EXERCICIO 02---")
var laele
var numeros = pedirNumeros(5);

    for (var i = 0; i < numeros.length; i ++){
    laele = numeros[i] + numeros[i + 1]
        console.log(laele)
}
}