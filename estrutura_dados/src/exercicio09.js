import leia from  'readline-sync'
 var vetor = [];
 var repetido = false;

 for(var i = 0; i < 10; i ++){
    vetor[i] = Math.floor(Math.random() * 10);

 }
 console.log("\nVetor: " + vetor);

 for(var i = 0; i < 10; i ++){
    for (var j = i  + 1; j < 10 ; j ++){
        if(vetor[i] == vetor[j]){
            console.log("vetor duplicado: ", vetor[i])
            repetido = true
        }
    }
 } if(repetido == false){
    console.log("NAOOOO TEMMMMMMMMM!!!!!!!!!!!!!!!!!!!!!!")
 }