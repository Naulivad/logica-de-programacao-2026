export function gerarNumero(qtd, min = 1, max = 100) {
    var numeros = [];
    for(var i = 0; i < qtd; i ++) {
        numeros[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return numeros;
}