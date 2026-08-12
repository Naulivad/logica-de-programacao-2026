import leia from "readline-sync";

var assentos = [];

for(var i = 0; i < 20; i ++){
    var cadeira = {
        numero: "A" + (i + 1),
        ocupado: false,
        tipo: (i < 5) ? "PREFERENCIAL" : "NORMAL"

    }
    assentos.push(cadeira);
}

function mostrarcadeiras(){
        console.log ("=====CADEIRAS=====");
        assentos.forEach((cadeira) => {
            var situacao = cadeira.ocupado === true ?  "OCUPADA" : "LIVRE";

            console.log(`Assento - ${cadeira.numero} | ${cadeira.tipo} | ${situacao}`)
        })
}



function ReservarAssento(){
 mostrarcadeiras()

 console.log("")
 console.log("")

    var Reservar = leia.question("Escolha uma cadeira para reserva: ")
    var encontrouCadeira = false;

    console.log("===== RESERVA =====");
    assentos.forEach((cadeira) => {
        if(cadeira.numero === Reservar) {
            encontrouCadeira = true
            if(cadeira.ocupado === true){
                console.log("JA TEM GENTE KKKKKKKKKK")

            }else{
                cadeira.ocupado = true
                console.log("CADEIRA RESERVADA COM SECESSO!!!")
                
            }
            return;
        }
        
    }) 
    if(encontrouCadeira === false){
        console.log("CADEIRA INFORMADA NÃO EXISTE!!!")
    }
}

function CancelarAssento(){
    mostrarcadeiras()
   
    console.log("")
    console.log("")
   
       var cancelar = leia.question("Escolha uma cadeira para cancelar: ")

       var encontrouCadeira = false;
   
       console.log("===== CANCELAAAAAAAARRRRRRRR =====");
       assentos.forEach((cadeira) => {
           if(cadeira.numero === cancelar) {
               encontrouCadeira = false
               if(cadeira.ocupado === false){
                   console.log("NÃO TEM NINGUEM AI MALUCO")
   
               }else{
                   cadeira.ocupado = false
                   console.log("CADEIRA CANCELADA COM SECESSO!!!")
                   
               }
               return;
           }
           
       }) 
       if(encontrouCadeira === false){
           console.log("CADEIRA INFORMADA NÃO EXISTE!!!")
       }
   }

var opcao;

do{
    console.log("\n==== CINEMA ====")
    console.log("1 - Mostrar assentos")
    console.log("2 - Reservar assentos")
    console.log("3 - Cancelar assentos")
    console.log("4 - Mostrar quantidade livres")
    console.log("5 - Mostrar quantidade ocupado")
    console.log("0 - Sair")

    opcao = leia.questionInt("Informe uma opcao: "); 

    if(opcao === 1) {
        mostrarcadeiras()
    
    }else if(opcao === 2){
        ReservarAssento()
        
    }else if(opcao === 3){
        CancelarAssento()

    }else if(opcao === 4){

    }else if(opcao === 5){

    }else{
        console.log("CABO!!!!")

    }

}while(opcao !== 0)

//soiuy g fds trash pou!