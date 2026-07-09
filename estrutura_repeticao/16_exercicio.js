import leia from 'readline-sync'

var maiorMedia
var nomeMedia

var contador = 1;
var qtd = 10;
var nomeMaiorMedia = "";

while (contador <= qtd) {

    var nome = leia.question("Nome do aluno " + contador + " : ");
    var nota = leia.questionFloat("Nota 1 : ");
    var nota2 = leia.questionFloat("Nota 2 : ");
    var nota3 = leia.questionFloat("Nota 3 : ");

    var media = (nota + nota2 + nota3) / 3;

    if (contador == 1) {
        maiorMedia = media;
        nomeMaiorMedia = nome;
    } else if (media > maiorMedia) {
        maiorMedia = media;
        nomeMaiorMedia = nome;
    }

    contador++;
}

console.log("A maior media foi " + maiorMedia.toFixed(2) + " e o nome do aluno eh : " + nomeMaiorMedia);