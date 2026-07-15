import leia from 'readline-sync';

var modo =leia.keyInSelect(["PvE", "PvP"], "ESCOLHA O MODO DE JOGO: ");
var numeroM;
if(modo === 1){
    numeroM = leia.questionInt("INFORME O NUMERO MAGICO: ")
    console.clear();
}else {
    var dificuldade = leia.keyInSelect(["FAC", "MED", "DIF"], "SELECIONE A DIFICULDADE: ")

    var limite = dificuldade === 0 ? 100 : dificuldade === 1 ? 1000 : 10000;

    numeroM = Math.floor(Math.random() * limite);
    console.log("O NUMERO ESTA ENTRE 1 e " + limite);
 
}

var chute;
var tentativa = 0;

do{
    chute = leia.questionInt("CHUTE UM NUMERO: ");
    if(chute > numeroM){
        console.log("NUMERO MAGICO É MENOR")

    }else if (chute < numeroM) {
        console.log("NUMERO MAGICO É MAIOR")
        
    }
}while (chute !== numeroM); // so para o cod se chute for diferente de numerom (numero magico selecionado pela maquina)

console.log("VOCE ACERTOU!!!!")
console.log("VOCE LEVOU " + tentativa + " TENTATIVAS!!! ")
 