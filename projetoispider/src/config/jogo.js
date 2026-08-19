import { DIFICULDADES } from "./dificuldades.js";


// ==================================
// VARIÁVEIS
// ==================================

let gotas = [
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

let formiga = null;

let score = 0;

let nivel = 1;

let perdeu = false;

let dificuldade;


// ==================================
// MENU
// ==================================

function menu() {

    console.clear();

    console.log("==============================");
    console.log("       JOGO DA ARANHA");
    console.log("==============================");
    console.log("");
    console.log("1 - Fácil");
    console.log("2 - Médio");
    console.log("3 - Difícil");
    console.log("");
    console.log("Escolha uma dificuldade:");

    process.stdin.once("data", function(tecla) {

        // Pega somente o primeiro caractere
        let escolha = tecla.toString()[0];


        if (escolha == "1") {

            dificuldade = DIFICULDADES[1];

            iniciarJogo();

        }

        else if (escolha == "2") {

            dificuldade = DIFICULDADES[2];

            iniciarJogo();

        }

        else if (escolha == "3") {

            dificuldade = DIFICULDADES[3];

            iniciarJogo();

        }

        else {

            console.log("");
            console.log("Opção inválida!");

            setTimeout(function() {

                menu();

            }, 1000);
        }

    });
}


// ==================================
// INICIAR JOGO
// ==================================

function iniciarJogo() {

    console.clear();

    console.log("==============================");
    console.log("Dificuldade: " + dificuldade.nome);
    console.log("Velocidade: " + dificuldade.velocidade);
    console.log("==============================");

    setTimeout(function() {

        // Ativa o teclado do jogo
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.setEncoding("utf8");

        mostrar();


        // Começa a chuva
        setInterval(function() {

            atualizar();

        }, dificuldade.velocidade);

    }, 1000);
}


// ==================================
// MOSTRAR JOGO
// ==================================

function mostrar() {

    console.clear();

    console.log("==============================");
    console.log("       JOGO DA ARANHA");
    console.log("==============================");

    console.log("Score: " + score);
    console.log("Nivel: " + nivel);
    console.log("Dificuldade: " + dificuldade.nome);

    console.log("");


    // TELA
    for (let y = 0; y < 20; y++) {

        let linha = "";


        for (let x = 0; x < 50; x++) {


            // =========================
            // ARANHA
            // =========================

            if (
                x == aranha.x &&
                y == aranha.y
            ) {

                linha += "🕷️";
            }


            // =========================
            // FORMIGA
            // =========================

            else if (
                formiga != null &&
                x == formiga.x &&
                y == formiga.y
            ) {

                linha += "🐜";
            }


            // =========================
            // GOTAS
            // =========================

            else {

                let temGota = false;


                for (let i = 0; i < gotas.length; i++) {

                    if (
                        gotas[i].x == x &&
                        gotas[i].y == y
                    ) {

                        temGota = true;
                    }
                }


                if (temGota == true) {

                    linha += "|";

                }

                else {

                    linha += " ";
                }
            }
        }


        console.log(linha);
    }


    console.log("");
    console.log("← → MOVER");
    console.log("↑ SAIR");
}


// ==================================
// ATUALIZAR JOGO
// ==================================

function atualizar() {

    if (perdeu == true) {

        return;
    }


    // ==================================
    // GOTAS
    // ==================================

    for (let i = 0; i < gotas.length; i++) {

        gotas[i].y++;


        // GOTA CHEGOU NO CHÃO
        if (gotas[i].y >= 20) {

            score += 10;

            gotas[i].y = 0;

            gotas[i].x = Math.floor(Math.random() * 50);
        }


        // COLISÃO
        if (
            gotas[i].x == aranha.x &&
            gotas[i].y == aranha.y
        ) {

            perdeu = true;

            gameOver();

            return;
        }
    }


    // ==================================
    // FORMIGA
    // ==================================

    criarFormiga();


    if (formiga != null) {

        formiga.y++;


        // PEGOU A FORMIGA
        if (
            formiga.x == aranha.x &&
            formiga.y == aranha.y
        ) {

            score += 50;

            formiga = null;
        }


        // FORMIGA CHEGOU NO CHÃO
        if (
            formiga != null &&
            formiga.y >= 20
        ) {

            formiga = null;
        }
    }


    // ==================================
    // VERIFICAR FASE
    // ==================================

    verificarFase();


    // ==================================
    // MOSTRAR
    // ==================================

    mostrar();
}


// ==================================
// CRIAR FORMIGA
// ==================================

function criarFormiga() {

    if (formiga == null) {

        let numero = Math.random();


        // 5% DE CHANCE
        if (numero < 0.05) {

            formiga = {

                x: Math.floor(Math.random() * 50),

                y: 0
            };
        }
    }
}


// ==================================
// VERIFICAR FASE
// ==================================

function verificarFase() {

    if (score >= 100) {

        nivel++;

        score = 0;


        // ADICIONA 3 GOTAS
        gotas.push({

            x: Math.floor(Math.random() * 50),

            y: 0

        });


        gotas.push({

            x: Math.floor(Math.random() * 50),

            y: 0

        });


        gotas.push({

            x: Math.floor(Math.random() * 50),

            y: 0

        });


        console.clear();

        console.log("");
        console.log("==============================");
        console.log("      PASSOU DE FASE!");
        console.log("");
        console.log("         NIVEL " + nivel);
        console.log("");
        console.log("       MAIS CHUVA!");
        console.log("==============================");


        setTimeout(function() {

            mostrar();

        }, 1000);
    }
}


// ==================================
// GAME OVER
// ==================================

function gameOver() {

    console.clear();

    console.log("");
    console.log("==============================");
    console.log("    A ARANHA FOI ATINGIDA!");
    console.log("==============================");
    console.log("");

    console.log("Score: " + score);
    console.log("Nivel: " + nivel);
    console.log("Dificuldade: " + dificuldade.nome);

    console.log("");
    console.log("↑ SAIR");
}


// ==================================
// TECLADO
// ==================================

process.stdin.on("data", function(tecla) {


    // =========================
    // SETA ESQUERDA
    // =========================

    if (tecla == "\u001b[D") {

        if (aranha.x > 0) {

            aranha.x--;
        }

        mostrar();
    }


    // =========================
    // SETA DIREITA
    // =========================

    if (tecla == "\u001b[C") {

        if (aranha.x < 49) {

            aranha.x++;
        }

        mostrar();
    }


    // =========================
    // SETA PARA CIMA
    // SAIR
    // =========================

    if (tecla == "\u001b[A") {

        console.clear();

        console.log("");
        console.log("==============================");
        console.log("       JOGO ENCERRADO!");
        console.log("==============================");
        console.log("");

        console.log("Score: " + score);
        console.log("Nivel: " + nivel);

        process.exit();
    }
});


// ==================================
// COMEÇAR
// ==================================

menu();