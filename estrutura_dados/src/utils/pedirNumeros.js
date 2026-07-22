import leia from "readline-sync";

export function pedirNumeros (quantidade){
    var lista = [];
    for(var i = 0; i < quantidade; i ++){
        lista[i] = leia.questionInt("DIGITE UM NUMERO: ")
    }

    return lista;

}

export function gerarNumeros(qtd, min = 1, max = 100) {
    var numeros = [];
    for(var i = 0; i < qtd; i ++) {
        numeros[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return numeros;
}