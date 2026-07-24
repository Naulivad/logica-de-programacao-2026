import leia from 'readline-sync';

var min = []
var max = []

for (var dia = 0; dia < 30; dia ++){
    var valor1 = Math.floor(Math.random() * 24) + 12;
    var valor2 = Math.floor(Math.random() * 24) + 12;

    if(valor1 < valor2) {
        min[dia] = valor1
        max[dia] = valor2
    }else {
        min[dia] = valor2
        max[dia] = valor1
    }
}

console.log("\nTEMPERATURAS MINIMAS " + min)
console.log("\nTEMPERATURAS MAXIMAS " + max)