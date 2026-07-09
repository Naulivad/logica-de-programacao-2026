import leia from 'readline-sync';

var contador = 1;
var somaImpares = 0;
var produtoPares = 1;

while (contador <= 6) {
    var numero = leia.questionInt(`Digite o ${contador} - numero inteiro e positivo:`);

    if (numero % 2 === 0) {
        produtoPares *= numero;
    } else {
        somaImpares += numero;
    }

    contador++;
}

console.log("Soma dos números ímpares:", somaImpares);
console.log("Produto dos números pares:", produtoPares);