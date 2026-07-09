import leia from 'readline-sync';

var contador = 0;

while (true) {
    var numero = leia.questionInt("Digite um numero (0 para encerrar): ");
    if (numero === 0) {
        break;
    }
    if (numero > 100 && numero < 200) {
        contador++;
    }
}

console.log(`Quantidade de numeros entre 100 e 200: ${contador}`);