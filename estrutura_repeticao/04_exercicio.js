import leia from 'readline-sync';

var qtd = 5;
var contador = 1;

var num = leia.questionInt("DIGITE UM NUMERO: ");
var maiorNum = num;
var menorNum = num;

contador++;

while (contador <= qtd) {
    num = leia.questionInt("DIGITE UM NUMERO: ");

    if (num > maiorNum) {
        maiorNum = num;
    }
    if (num < menorNum) {
        menorNum = num;
    }
    contador++;
}

console.log("Maior número:", maiorNum);
console.log("Menor número:", menorNum);