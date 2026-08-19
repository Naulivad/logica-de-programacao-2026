const gotas = [
    { x: 5, y: 0 },
    { x: 15, y: 2 },
    { x: 25, y: 5 },
    { x: 35, y: 1 },
    { x: 45, y: 4 }
];

let aranha = {
    x: 30,
    y: 15
};

let perdeu = false;


// Mostra o jogo
function mostrar() {

    console.clear();

    for (let y = 0; y < 20; y++) {

        let linha = "";

        for (let x = 0; x < 50; x++) {

            // Mostra a aranha
            if (x == aranha.x && y == aranha.y) {
                linha += "🕷️";
            }

            else {

                let temGota = false;

                // Procura uma gota
                for (let i = 0; i < gotas.length; i++) {

                    if (gotas[i].x == x && gotas[i].y == y) {
                        temGota = true;
                    }

                }

                if (temGota == true) {
                    linha += "💧";
                }

                else {
                    linha += " ";
                }
            }
        }

        console.log(linha);
    }

    console.log("Use A para esquerda e D para direita");

}


// Teclas
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", function(tecla) {

    if (tecla == "a" && aranha.x > 0) {
        aranha.x--;
    }

    if (tecla == "d" && aranha.x < 49) {
        aranha.x++;
    }

});


// Faz as gotas caírem
setInterval(function() {

    if (perdeu == true) {
        console.clear();
        console.log("A ARANHA FOI ATINGIDA!");
        return;
    }

    for (let i = 0; i < gotas.length; i++) {

        gotas[i].y++;

        // Quando a gota chega no chão
        if (gotas[i].y >= 20) {
            gotas[i].y = 0;
        }

        // Verifica colisão
        if (
            gotas[i].x == aranha.x &&
            gotas[i].y == aranha.y
        ) {
            perdeu = true;
        }
    }

    mostrar();


}, 300);