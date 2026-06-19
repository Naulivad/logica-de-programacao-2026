import leia from "readline-sync";

var aquecimento = leia.question("Digite a temperatura da maquina: ")

if(aquecimento < 50){
    console.log("Resfriamento crítico")
} else if(aquecimento <= 50 && aquecimento <= 89) {
    console.log("A temperatura esta normal")
} else if(aquecimento >= 90 && aquecimento <= 107){
    console.log("Atenção")    
} else {
    console.log("Superquecimento")
}