// // E - SO VAI DAR VERDADEIRO SE TODOS FOREM VERDADEIROS 
// //OU - SO VAI DAR FALSO SE TUDO FOR FALSOS
// var idade = 30
// var temCnh = true

// if(idade < 1) {
//     console.log("RECEM NASCIDO!")
// } else if(idade >= 1 && idade<= 12) {
//     console.log("CRIANÇA!")
// } else if(idade > 12 && idade < 18) {
//     console.log("ADOLECENTE!")
// } else if(idade >= 18 && idade <60) {
//     console.log("ADULTO!")
// } else {
//     console.log("IDOSO!")
// }

// var mediaF = 6.5 

// if(mediaF >= 7) {
//     console.log("APROVADO!!")
// } else if(mediaF >= 5 && mediaF < 7){
//     comsole.log("EM RECUPERAÇÃO!")
// } else {
//     console.log("REPROVADO!!")
// }

// var diaDS = "quarta"
// if(diaDS === "sabado" || diaDS === "domingo") {
//     console.log("FIM DE SEMANA");
// } else {
//     console.log("DIA UTIL")
// }

// var sistempag = "pix";
// var valorP = 15.6;

// if(sistempag === "pix" || fp === 'dinheiro' || fp === "debito"){
//     console.log("VALOR DO PRODUTO É: R$" + valorP.toFixed(2))
// } else {
//     var valorT = valorP + (valorP * 0.15)
//     console.log("VALOR DO PRODUTO É: R$" + valorT,toFixed(2))
// }

// var numero = 6
// if(numero % 2 === 0) {
//     console.log("SEU NUMERO É PAR")
// }else {
//     console.log("SEU NUMERO É IMPAR")
// }

var cor = "vermelho"

switch (cor.toUpperCase) {
case "vermelho" :
    console.log("PARE")
    break
case "amarelo" :
    console.log("ATENÇÃO")
    break
case "verde" :
    console.log("SIGA")
    break;
default:
    console.log("COR INVALIDA")
}

//2
var idioma = "pt";
switch(idioma){
    case "en" :
        console.log("HELLO!!!")
    case "es" :
        console.log("HOLA!!!")
    case "fr" :
         console.log("BONJUOR!!!")
    case "pt" :
        console.log("OLÁ!!!")
    
}