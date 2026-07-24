import leia from 'readline-sync';

var vetorzinho = [];
    var mama = [];
    var papa = [];

    for (var dia = 0; dia < 50; dia++){
    papa[dia] = Math.floor(Math.random() * 100);
    mama[dia] = Math.floor(Math.random() * 100);
    }

    for (var dia = 0; dia < 50; dia++){
        if(dia % 2 == 0){
            vetorzinho[dia] = papa[dia];

        }else {
            vetorzinho[dia] = mama[dia];
        }
    }


console.log(papa)
console.log(mama)
console.log(vetorzinho)