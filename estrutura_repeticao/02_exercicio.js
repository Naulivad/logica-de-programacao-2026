import leia from 'readline-sync'

var num = leia.questionInt("DIGITE UM NUMERO: ")

while(num >= 0){
    console.log(num)
    num--
}