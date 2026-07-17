import leia from "readline-sync"

// var listaNomes = ["LELECS", "THALES", "NICULAX"]

// console.log(listaNomes);
// console.log(listaNomes[1]);
// console.log(listaNomes[2]);

// //add o 3

// var contador = 3;
// listaNomes[contador] = "RICK"
// console.log(listaNomes[3]);

// //add NO FIM DA LISTA

// listaNomes.push("RICHE")
// console.log(listaNomes[4]);

// //add no inicio da lista

// listaNomes.unshift("BORA BILL")

// //remover o ultimo da lista

// listaNomes.pop();

// //remover do inicio

// listaNomes.shift();

// //subistitui um deles

// listaNomes[4] = "LUQI"
// console.log(listaNomes)

// //tamanho da lista

// console.log(listaNomes.length)

// //ultimo da lista

// console.log(listaNomes[listaNomes.length - 1])

// //primeiro da lista

// console.log(listaNomes[0])

// for(var contador = 0; contador < listaNomes.length; contador++){

//         listaNomes[contador] = "NADA";
//     }

// listaNomes.forEach((item, index) => {
//     listaNomes[index] = "NADA"
// })
// // penecox
//     console.log(listaNomes)

var tabu = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "]
]

function pedirPosicao (index) {
  var linha = leia.questionInt("DIGITE A LINHA") ;
  var coluna = leia.questionInt("DIGITE A COLUNA") ;
  tabu[linha][coluna] = index % 2 === 0 ? "X" : "O";
}

function jogoDaVelhaDesenhar(){
  for (var i = 0; i < tabu[0].length; i ++) {
    console.log(" " + tabu[i][0] + " | " + tabu [i][1] + " | " + tabu [i][2])
    if(i < 2) {
        console.log("-----------")

    }
}

}

for (var i = 0; i < 9; i ++){
    pedirPosicao(i)
    jogoDaVelhaDesenhar()
}