import leia from 'readline-sync'
import { exercicio01 } from './exercicio01.js';
import { exercicio02 } from './exercicio02.js';
import { exercicio03 } from './exercicio03.js';


console.log("----- LISTA DE EXERCICIOS -----")
const QTD_OPC = 13;
var opcoes = []
for(var i = 0; i < QTD_OPC; i++){
    opcoes.push("EXERCICIO " + String(i).padStart(2, "0"))
} 
var opcao = leia.keyInSelect(opcoes, "SELECIONE UMA OPCAO")

switch(opcao){

case 0 : 
exercicio01();
break;
    case 1 :
    exercicio02();
    break;
        case 2 :
        exercicio03();
        break;

}