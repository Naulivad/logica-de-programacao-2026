import leia from "readline-sync"
// // OPERADOR TERNARIO / ESTRUTURA CONDICIONAL
// var idade = 22
// var eMaior = idade >= 18 ? "MAOIR DE IDADE" : "MENOR DE IDADE"
// console.log(eMaior)

// //OU
// console.log(idade >= 18 ? "MAIOR DE IDADE" : "MENOR DE IDADE")

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

// var cor = "vermelho"

// switch (cor.toUpperCase) {
// case "vermelho" :
//     console.log("PARE")
//     break
// case "amarelo" :
//     console.log("ATENÇÃO")
//     break
// case "verde" :
//     console.log("SIGA")
//     break;
// default:
//     console.log("COR INVALIDA")
// }

// //2
// var idioma = "pt";
// switch(idioma){
//     case "en" :
//         console.log("HELLO!!!")
//     case "es" :
//         console.log("HOLA!!!")
//     case "fr" :
//          console.log("BONJUOR!!!")
//     case "pt" :
//         console.log("OLÁ!!!")
    
// }
// var placa = leia.question("DIGITE A PLACA DE SEU CARRO: ")
// var ud = placa[placa.length - 1]

// if(ud === '0' || ud === '1'){
//     console.log("VOCÊ NÃO PODE RODAR NA SUGUNDA FEIRA")
// }else if(ud === '2' || ud === '3'){
//     console.log("VOCÊ NÃO PODE RODAR NA TERÇA FEIRA")
// }else if(ud === '4' || ud === '5'){
//     console.log("VOCÊ NÃO PODE RODAR NA QUARTA FEIRA")
// }else if(ud === '6' || ud === '7'){
//     console.log("VOCÊ NÃO PODE RODAR NA QUINTA FEIRA")
// }else if(ud === '8' || ud === '9'){
//     console.log("VOCÊ NÃO PODE RODAR NA SEXTA FEIRA")
// }

// switch(ud) {
//     case '0' :
//     case '1' :
//         console.log("VOCÊ NÃO PODE RODAR NA SEGUNDA FEIRA")
//         break
//     case '2' :
//     case '3' :
//          console.log("VOCÊ NÃO PODE RODAR NA TERÇA FEIRA")
//          break
//     case '4' :
//     case '5' :
//         console.log("VOCÊ NÃO PODE RODAR NA QUARTA FEIRA")
//         break
//     case '6' :
//     case '7' :
//         console.log("VOCÊ NÃO PODE RODAR NA QUINTA FEIRA")
//         break
//     case '8' :
//     case '9' :
//         console.log("VOCÊ NÃO PODE RODAR NA SEXTA FEIRA")
//         break
//     default :
//     console.log("NUMERO INVALIDO!!!")

// }

// var mensag = ud === '0' || ud === '1' ? "SEGUNDA FEIRA" :
//     mensag = ud === '2' || ud === '3' ? "TERÇA FEIRA" :
//     mensag = ud === '4' || ud === '5' ? "QUARTA FEIRA" :
//     mensag = ud === '6' || ud === '7' ? "QUINTA FEIRA" :
//     mensag = ud === '8' || ud === '9' ? "SEXTA FEIRA" :
//     mensag = "NUMERO INVALIDO"
// console.log(`VOCÊ NÃO PODE RODAR NA ${mensag}`)
             
// var macascomp = leia.question("QUANTAS MAÇAS VC COMPROU NA LOJA DO SEU ZÉ? ")
// if(macascomp < 12){
//     console.log("O PREÇO A SER PAGADO É DE: " + "R$" + macascomp * 0.30)
// } else if(macascomp >= 12){
//        console.log("O PREÇO A SER PAGADO É DE: " + "R$" + macascomp * 0.25 )
// }

// var c1 = leia.question("QUAL SEU NOME? ")
// var P1 = leia.questionFloat("QUANTO VC GASTOU " + c1 + "?")
// var c2 = leia.question("QUAL SEU NOME? ")
// var P2 = leia.questionFloat("QUANTO VC GASTOU " + c2 + "?")
// var PP = P1 + P2
// var media = PP / 2
// console.log("O PREÇO PAGADO POR " + c1 + " E " + c2 + " É DE: " + PP)
// console.log("A MEDIA DAS COMPRAS É DE: " + media)
// if(P1 > 20){
//     console.log(c1 + " gastou mais de 20 reais na loja")
// }


// if(P2 > 20){
//     console.log(c2 + " gastou mais de 20 reais na loja")
// }

var nomek = leia.question ("Qual o nome do produto que quer comprar? ")
var valorx = leia.question("Qual o valor desse produto? ")
var m1 = leia.question("quantos moedas de 1 real voce tem? ")
var m50 = leia.question("quantos moedas de 50 centavos tem? ")
var m25 = leia.question("quantos moedas de 25 centavos voce tem? ")
var m10 = leia.question("quantos moedas de 10 centavos voce tem? ")
var m5 = leia.question("quantos moedas de 5 centavos voce tem? ")
var totau = m1 * 1.0 + m50 * 0.50 + m25 * 0.25 + m10 * 0.10 + m5 * 0.05
console.log ("O TOTAL NO SEU COFRINHO É DE: " + totau) 
if(totau >= valorx){
    console.log("Voce tem dinheiro o suficiente para comprar " + nomek)
} else if(totau < valorx)
    console.log("Voce nao tem dinehiro para comprar " + nomek)
