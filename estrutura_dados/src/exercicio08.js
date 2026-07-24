import leia from  'readline-sync'

var v1 = [];
var v2 = [];
var v3 = [];
var resu = [];

for (var dia = 0; dia < 9; dia++){
    v1[dia] = Math.floor(Math.random() * 100);
    v2[dia] = Math.floor(Math.random() * 100);
    v3[dia] = Math.floor(Math.random() * 100);
    }
for (var dia = 0; dia < 3 ; dia ++) {
    resu[dia] = v1[dia];
}
for (var dia = 3; dia < 6 ; dia ++) {
    resu[dia] = v2[dia];
}
for (var dia = 6; dia < 9 ; dia ++) {
    resu[dia] = v3[dia];
}

console.log (v1)
console.log (v2)
console.log (v3)
console.log (resu)
