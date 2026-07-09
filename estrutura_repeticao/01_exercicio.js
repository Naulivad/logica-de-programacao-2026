import leia from 'readline-sync'

var num = leia.questionInt("DIGITE UM NUMERO: ")
var contador = 0

while(contador <= num){
    console.log(contador)
    contador++
}