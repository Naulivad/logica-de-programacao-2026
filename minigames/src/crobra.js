const PAREDE = "⬜";
const VAZIO = "⬛";
const CABECA = "👽";
const CORPO = "🟩";
const COMIDA = "🔴";

// PLANO CARTESIANO

const ALTURA = 15; // Y
const LARGURA = 30; // X

var crobraX = [10];
var crobraY = [7];

var comidaX = Math.floor(Math.random() * LARGURA);
var comidaY = Math.floor(Math.random() * ALTURA);

var pontos = 0; // ACUMULAR PONTOS KKJ
var direcao = "d" // wasd pra andar kkj
var gameOver = false;

// FERRAMENTA DE DESENHO 
function desenhar() {
    var tela = "";
    tela += "---- JOGO DA CROBRA ----\n "
    tela += "W A S D PARA MOVER | Q === SAIR\n "
    tela += "PONTOS " + pontos + "\n\n";

    for (var y = - 1; y <= ALTURA; y++) {
        var linha = " ";
        for (var x = - 1; x <= LARGURA; x++) {
            if (x === -1 || x === LARGURA || y === -1 || y === ALTURA) {
                linha += PAREDE
            } else if (x === comidaX && y === comidaY) {
                linha += COMIDA;
            } else {
                var desenhoucroba = false;

                for (var i = 0; i < crobraX.length; i++){
                    if(crobraX[i] === x && crobraY[i] === y){
                        if(i === 0) {
                            linha += CABECA;
                        }else{
                            linha += CORPO;
                            desenhoucroba = true
                        }
                    }

                    if (desenhoucroba === false){
                        linha += VAZIO
                    }
                    
                }

            }
        }
        tela += linha + "\n" // \N = PULAR LINHA!!! 
    }

    process.stdout.write("\x1b[H" + tela);

}

desenhar();

