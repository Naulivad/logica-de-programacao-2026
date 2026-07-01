import leia from "readline-sync"

// var senha = ""
// var tentativas = 3

// while (senha !== "1234" && tentativas > 0){
// senha = leia.question("DIGITE A SENHA: VOCE TEM " + tentativas + " TANTATIVAS // ")


//  if (senha !== "1234"){
//     console.log("SENHA INCORRETA")
//     tentativas --
//  }
// }

// if (tentativas > 0 ) {
//     console.log("SENHA CORRETA!!!")
// } else {
//     console.log("VOCE NAO TEM MAIS TENTATIVAS")
// }

var notasoma = 0 
var quantidade = 2
var contador = 1

// while (contador <= quantidade){
//     var nota = leia.questionFloat("DIGITE A NOTA " + contador + " ")
//     notasoma = notasoma + nota
//     contador ++

// }

// var media = notasoma / quantidade
// console.log ("MEDIA: " + media.toFixed(2))

notasoma = 0;
for(var cont = 1; cont <= quantidade; cont ++) {
    var nota = leia.questionFloat("DIGITE A NOTA " + cont + " ")
    notasoma = notasoma + nota
}