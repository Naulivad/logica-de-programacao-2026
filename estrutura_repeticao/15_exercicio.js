import leia from 'readline-sync'

var numero = leia.questionInt("digite um numero ")
var binario = " "
var valor = numero
while(valor / 2){
    var resul = valor / 2
    var resto = valor % 2
    valor = Math.floor(valor / 2)

console.log(binario)

}