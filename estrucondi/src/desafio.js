import leia from "readline-sync"

console.log("------DESAFIO DOS FIOS------")

var escolha = leia.keyInSelect(opcoes, 'Escolha uma opcao:')

var fio

if(escolha === 0){
    fio = branco;
}else if (escolha === 1){
    fio = verde
}else if (escolha === 2){
    fio = azul
}else if (escolha === 3){
    fio = vermelho
}else{
    console.log('Operacao cancelada');
}

let fioAleatorio = Math.floor(Math.random() * 4) + 1;

let tentativas = 0
let limitedeTentativas = 5

 while(resposta != fioAleatorio && tentativas < limitedeTentativas);

if (resposta == numeroAleatorio){
    console.log("você acertou! o número certo é " + numeroAleatorio);
    console.log("quantidade de tentativas: " + tentativas);

} else {
    console.log("você perdeu, o número correto era: " + numeroAleatorio);
}