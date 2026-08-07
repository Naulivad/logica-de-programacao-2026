import leia from "readline-sync";
import { DIFICULDADES } from "./config/config.js";
import { jogo } from "./objetos/jogo.js";

function mostrarMenu() {
    console.log("=============================")
    console.log("        JOGO DA CROBA        ")
    console.log("=============================")

    console.log("1 - FACIL")
    console.log("1 - MEDIO")
    console.log("1 - DIFICIL")

    var opcao = leia.questionInt("Escolha uma opcao: ")
    var dificuldade = DIFICULDADES[opcao]
    

    if(dificuldade === undefined){
        console.log("OPCAO INVALIDA!!!!")
        return;
    }

    jogo.iniciar();
}

mostrarMenu();