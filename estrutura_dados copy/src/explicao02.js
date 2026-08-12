import leia, { questionInt } from "readline-sync"
// for(var i = 0; i < algumacoisa; i ++){

// }
// var laele = 0
// while(laele < 10){
//     console.log("uiuiui la ele")
//     laele ++
// // fazer "nome da variavel" ++ no final 
// }

// do {

// }while()
// EXEMPLU
var numero = leia.questionInt("DIGITE O NUMERO 0 : ")
    while(numero !== 0){
        console.log("VC É BURRO? ")
      var numero = leia.questionInt("DIGITE O NUMERO 0 : ")

      if(numero === 0){
        console.log("YEEEEHHH")
      }
    // fazer "nome da variavel" ++ no final 
    }

    // obéjetuh

    var pessoa = {
        nome: "Lua",
        idade: 67,
    }

    pessoa.nome = " do rock"
    pessoa.idade ++

    console.log(pessoa)