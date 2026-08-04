import leia from 'readline-sync'
import { pedirNumeros } from "./utils/pedirNumeros.js";

export function exercicio02(){
console.log("----- EXERCICIO 02 -----")
var resultado = []
var renkrenk = pedirNumeros(5)


for(var i = 0; i < renkrenk.length; i++){
    
    
    var soma = renkrenk[i] 
    resultado[i] = soma
    console.log(resultado[i])
}
}





exercicio02()