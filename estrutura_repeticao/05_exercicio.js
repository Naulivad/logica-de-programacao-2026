var precoCopia = 0.33
var contador = 1
var total = 0

while(contador <= 500){
    total = precoCopia * contador
    console.log(`Número de Cópia ${contador} : R$ ${total.toFixed(2)}`)
    contador++
}