var anos = 0;
var valentina = 1.50;
var joao = 1.40;

while (joao <= valentina) {
    valentina += 0.02; 
    joao += 0.03;  
    anos++;
}

console.log(`Anos: ${anos}`);
console.log(`Altura da Valentina: ${valentina.toFixed(2)} m`);
console.log(`Altura do João: ${joao.toFixed(2)} m`);