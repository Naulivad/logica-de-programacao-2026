import leia from "readline-sync"


// console.log("-------------desafio dos fios-------------")

// var fioal = Math.floor(Math.random() * 4) 

// var tentativas = 5

// do{
   
//     var escolha = leia.keyInSelect(
//         ["branco"," verde", "azul", "vermelho"], 
//         "escolha uma cor "
//     )
//     if(escolha === fioal){
//         console.log("voce ganhou o jogo era o fio  "+ (fioal +1))
//         break
//     }
//     tentativas--
//     console.log ("fio errado tente de novo")
//     console.log("tentativas restantes" + tentativas)
  

// }while(tentativas > 0)
//     if(tentativas === 0){
//         console.log("voce explodiu seu pais ")
//     }

//professor

console.log("=== DESARME A BOMBA ===")
console.log("UMA BOMBA FOI IMPLANTADA")
console.log("VOCE PRECISA CORTAR O FIO EM 3 TENTATIVAS")
console.log("=======")

var fios = [
    "vermelho", "azul", "verde", "amarelo", "laranja", "rosa"
]

var fiocorret = fios [Math.floor(Math.random() * fios.length)]
var tentativas = 3;

var desarmou = false 

do {
    var escolha = leia.keyInSelect(fios, `escollha um fio para cortar voce tem ${tentativas} tentativas`)
    var fioescolhido = fios[escolha]
    
    if (fioescolhido === fiocorret) {
        console.log("voce desarmou a bomba")
        console.log ("parabens")

        desarmou = true
        
    } else {

        console.log("voce cortou o fio " + fioescolhido)
        console.log("esse nao era o fio correto")

        tentativas--

        fios.splice(escolha, 1)
    }

    console.log ("---------------------------------")

}while (tentativas > 0 && desarmou === false);


if (desarmou === false) {
    console.log ("KABUUUUMMMMM! ")
    console.log ("o fio correto era " + fiocorret)
}