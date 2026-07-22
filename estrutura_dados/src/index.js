import leia from "readline-sync";
import { exercicio03 } from './exercicio03.js'
import { exercicio01 } from './exercicio01.js';
import { exercicio02 } from "./exercicio02.js";

console.log("-----MENU DE EXERCICOS-----")
var opcao = leia.keyInSelect([
    "EXERCICIO 01", 
    "EXERCICIO 02",
    "EXERCICIO 03",

]);

switch(opcao){
    case 0:
        exercicio01();
        break;
    case 1:
        exercicio02();
        break;
    case 2:
        exercicio03();
        break;
    case 3:
    case 4:
        break;
    case 5:
        break;
    case 6:
        break;
    case 7:
        break;
    case 8:
        break;
    case 9:
        break;
    case 10:
        break;
    case 11:
        break;
    case 12:
        break
    case 13:
        break;
}