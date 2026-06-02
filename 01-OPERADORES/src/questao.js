import leia, { keyIn } from "readline-sync";

/*
//ENTRADA
var numero = leia.questionInt ("Digite um numero: ")

//PROD
var antecessor = numero - 1;

//SAIDA
console.log("o seu antecessor e: " + antecessor) 

//ENTRADA
var temperaturac = leia.questionFloat ("Qual a temperatura? ")

//PROD
var temperaturaf = (temperaturac * 1.8) + 32

var temperaturak = temperaturac + 273.15

//SAIDA Luan

console.log("A temperatura em F e: " + temperaturaf)
console.log("A temperatura em K e: " + temperaturak)

//SAIDA Gustavo

console.log(temperaturac + "graus celsius e igual a " + temperaturaf + " graus em fahrenheit.")
console.log(temperaturac + "graus celsius e igual a " + temperaturak + " graus em kelvin.") 


 2
var altura = leia.questionInt (" Qual a altura do retangulo? ")
var largura = leia.questionInt (" Qual a largura do retangulo? ")

var area = (altura * largura)

console.log("A area do seu retangulo e: " + area)


3
var anos = leia.questionInt (" Quantos anos vc tem? ")
var meses = leia.questionInt (" Quantos meses vc tem? ")
var dias = leia.questionInt (" E quantos dias vc tem? ")

var anosd = (anos * 365)
var mesesd = (meses * 30)
var diasv = (anosd + mesesd + dias)

console.log("Voce viveu " + diasv + " dias.")


var eleitores = leia.questionInt ("Quantos votos foram feitos? ")
var votosb = leia.questionInt ("Quantos votos em branco? ")
var votosV = leia.questionInt ("Quantos votoss validos? ")
var votosN = leia.questionInt ("Quantos votoss nulos? ")

var votosb = (votosb / eleitores) * 100
var votosV = (votosV / eleitores) * 100
var votosV = (votosN / eleitores) * 100

console.log("O percentual de votos em branco foram de: " + votosb.toFixed(2) + "%")
console.log("O percentual de votos validos foram de: " + votosV.toFixed(2) + "%")
console.log("O percentual de votos nulos foram de: " + votosN.toFixed(2) + "%")


var corrida1 = leia.questionInt ("Digite o valor da corrida 1 ")
var corrida2 = leia.questionInt ("Digite o valor da corrida 2 ")
var corrida3 = leia.questionInt ("Digite o valor da corrida 3 ")
var corrida4 = leia.questionInt ("Digite o valor da corrida 4 ")
var corrida5 = leia.questionInt ("Digite o valor da corrida 5 ")

var valorT = corrida1 + corrida2 + corrida3 + corrida4 + corrida5
var desconto = valorT * 0.25 
var fim = valorT - desconto

console.log("O valor total foi de: " + valorT.toFixed(2))
console.log("O valor de desconto foi de: " + desconto.toFixed(2))
console.log("O valor final foi de: " + fim.toFixed(2)) 

7

var preco = leia.questionFloat ("DIGITE O VALOR DO PRODUTO: ")

var totalP = 0.0

if(preco <= 20){
    totalP = preco + preco * 0.45

}else{
    totalP = preco + preco * 0.30

}


console.log("VALOR NA LOJA: " + totalP ) 

8

var numeru = leia.questionFloat ("digete um numero: ")

var dobro = numeru * 2

var triplo = numeru * 3

console.log("O dobro do seu valor e: " + dobro)
console.log("O triplo do seu valor e: " + triplo) 
 9

var metros = leia.questionFloat ("digete um numero em metros: ")
var cm = metros * 100
var mili = metros * 1000 

console.log("Seu valor em cm e: " + cm)
console.log("Seu valor em milimetros e: " + mili) 
10

var nota1 = leia.questionFloat ("Qual foi sua primeira nota? ")
var nota2 = leia.questionFloat ("Qual foi sua segunda nota? ")
var nota3 = leia.questionFloat ("Qual foi sua terceira nota? ")

var resul = nota1 + nota2 + nota3 
 var totalr = resul / 3
 var reesultado = totalr >=7 ? "APROVADO" : "REPROVADO"

 console.log("Sua media e de: " + totalr + "E voce esta: " + reesultado)
 
12 

var salario = leia.questionFloat ("Digite seu salario atual:")
var aumento = salario * 0.15
var totau = salario + aumento

console.log("Seu salario com aumento e de: " + totau) 

13

var prod = leia.questionFloat ("Digite o valor do produto: ")
var descont = prod * 0.10
var totao = prod - descont

console.log("Voce recebera um desconto de: " + descont)
console.log("O valor final do seu produto e de: " +  totao) 

14 

var hora = leia.questionInt ("Digite um valor em horas: ")
var min = (hora * 60)
var seg = (hora * 3600)

console.log("Seu valor em minutos e de: " + min + " e em segundos e de: " + seg) 

15

var dist = leia.questionInt ("Qual foi a distancia percorrida por voce: ")
var gaso = leia.questionInt ("Qual foi a quantidade de litros de gasolina gastos: ")

var consumo = gaso / dist

console.log("Consumo medio: " + consumo.toFixed(2) + "KM/L")*/
 
console.log("------JOGO DO NUMERO ALEATORIO------")

let resposta
let numeroAleatorio = Math.floor(Math.random() * 50) + 1;

let tentativas = 0
let limitedeTentativas = 5

do{
    resposta = leia.questionInt("digite um numero entre 1 a 50: ");
    tentativas++;

    if (resposta > numeroAleatorio){
        console.log("o número sorteado é menor");

    } else if(resposta < numeroAleatorio){
        console.log("o número sorteado é maior");
    }

} while(resposta != numeroAleatorio && tentativas < limitedeTentativas);

if (resposta == numeroAleatorio){
    console.log("você acertou! o número certo é " + numeroAleatorio);
    console.log("quantidade de tentativas: " + tentativas);

} else {
    console.log("você perdeu, o número correto era: " + numeroAleatorio);
}