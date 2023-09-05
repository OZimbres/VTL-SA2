/*-----===VARIÁVEIS==-----*/
const interruptor = document.getElementById("interruptor");
var luzLigada = "/assets/imagens/lampada/LuzApagada.png";
var luzDesligada = "/assets/imagens/lampada/LuzAcesa.png";
var luzQuebrada = "/assets/imagens/lampada/luzQuebrada.png";
var interruptorDesligado = "/assets/imagens/lampada/interruptorDesligado.png"
var interruptorLigado = "/assets/imagens/lampada/interruptorLigado.png"
let contador = 0;
const trocarlamp = document.getElementById("trocarlamp");
/*---=EventListener=---*/
interruptor.addEventListener("click", () => {
    if (contador < 10) {
        trocar();
        contador++;
    }
    else {
        var luzAtual = document.getElementById("luz");
        luzAtual.setAttribute("src", luzQuebrada);
    }
});

trocarlamp.addEventListener("click", () => {
    contador = 0;
    let LuzAtual = "/assets/imagens/lampada/LuzApagada.png";
    var luzAtual = document.getElementById("luz");
    luzAtual.setAttribute("src", LuzAtual);
});
/*---=FUNÇÕES=---*/
function trocar() {
    var luzAtual = document.getElementById("luz");
    var srcLuzAtual = luzAtual.getAttribute("src");

    var interruptorAtual = document.getElementById("interruptor");

    if (srcLuzAtual == "/assets/imagens/lampada/LuzApagada.png") {
        luzAtual.setAttribute("src", luzDesligada);
        interruptorAtual.setAttribute("src", interruptorLigado);
    } else {
        luzAtual.setAttribute("src", luzLigada);
        interruptorAtual.setAttribute("src", interruptorDesligado);
    }
}

