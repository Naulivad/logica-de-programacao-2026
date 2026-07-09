import leia from 'readline-sync'

var numero = leia.questionInt("Digite quantos numeros da sequencia: ")

var fib1 = 1;
var fib2 = 1;
var proximo;

var contador = 1;

while(contador <= numero){

    if(contador == 1 || contador == 2){
        console.log(1)
    }else{
        proximo = fib1 + fib2;
        console.log(proximo);

        fib1 = fib2;
        fib2 = proximo;
    }

    contador++;
}