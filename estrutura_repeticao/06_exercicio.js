import leia from 'readline-sync';

var num = leia.questionInt("DIGITE UM NUMERO: ")
var contador = 0
var total = 0

console.log("TABUADA DE: " + num)
while(contador <= 10){
    total = num * contador
    console.log(`${num} × ${contador} = ${total}`)
    contador++
}
