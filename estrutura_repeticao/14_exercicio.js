import leia from 'readline-sync'

var numero = leia.questionInt("Digite um numero: ");

var fat = 1;

while (numero > 0) {
    fat = fat * numero;
    numero--;
}

console.log("O fatorial eh: " + fat);