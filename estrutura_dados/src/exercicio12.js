export function exercicio12(){
    var lados= [0, 0, 0, 0, 0, 0, 0]
        for(var i = 0; i < 1000; i++){
        var resultadoDado = Math.floor(Math.random() * 6) + 1;
    lados[resultadoDado - 1] ++;

        }
        
        var dadovic = false;
        for (var i = 0; i < lados.length; i ++){
            var porc = (lados[i] / 1000) * 100;
            console.log('LADO ' + (i + 1) + "")
        }
}