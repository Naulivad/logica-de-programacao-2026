import leia from 'readline-sync';

var opcoes = ["PEDRA", "PAPEL", "TESOURA"];

var escolhaComputador = Math.floor(Math.random() * 3);

var escolhaUser = leia.keyInSelect(opcoes, "Escolha sua opcao: ")

if(escolhaUser === -1) {
    console.log("OPCAO INVALIDA, JOGO CANCELADO!!!")
}else{
    console.log("Voce escolheu " + opcoes[escolhaUser])
    console.log("O cumputador escolheu: " + opcoes[escolhaComputador])

    if(escolhaComputador === escolhaUser){
        console.log("EMPATE!!!")
    } else if(
        escolhaUser === 0 && escolhaComputador === 2 ||
        escolhaUser === 1 && escolhaComputador === 0 ||
        escolhaUser === 2 && escolhaComputador === 1
    ){
        console.log("USUARIO GANHOUUU!!!")
    }else {
        console.log("COMPUTADOR GANHOU!!!")
    }
    
}