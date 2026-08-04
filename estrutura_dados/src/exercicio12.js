import leia from 'readline-sync'

export function exercicio12(){

 var dado = [0, 0, 0, 0, 0, 0]
var total = 1000

for(var i = 0; i < total; i++){

var resultado = Math.floor(Math.random() * 6)

 dado[resultado]++
}
var viciado = false

for(var i = 0; i < dado.length; i++){

        var porcentagem = dado[i] / total * 100

        console.log(
            "Número : ", i + 1,
            "saiu : ", dado[i],
            "vezes -",
            porcentagem.toFixed(2) + "%"
        )
    }

     if(porcentagem > 22){
            viciado = true
        }
    

    if(viciado){
        console.log("O dado é viciado!")
    }else{
        console.log("O dado não é viciado!")
    }
}

exercicio12()