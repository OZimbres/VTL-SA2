/*-----===VARIÁVEIS===-----*/
const startBtn = document.querySelector(".start-btn"); //variável do botão de start
const pauseBtn = document.querySelector(".pause-btn"); //variável do botão de pause
const stopBtn = document.querySelector(".stop-btn"); // variável do botão de stop

var seconds = 0o0; //variável para os segundos
var minutes = 0o0; //variável para os minutos
var hours = 0o0; //variável para as horas
var interval; // variável para o intervalo de temppo

/*---=EventListener=---*/
startBtn.addEventListener("click", start); //quando ele clicar no botão ativará a função
pauseBtn.addEventListener("click", pause); //quando ele clicar no botão ativará a função
stopBtn.addEventListener("click", toStop); //quando ele clicar no botão ativará a função

/*---=FUNÇÕES=---*/
function twoDigits(digit) { // função para os dígitos do cronômetro
    if(digit < 10) {
        return('0'+digit);
    } else {
        return(digit);
    }
}

function start() {
    timer();
   interval = setInterval(timer,1000); // função para o cronômetro rodar de 1 em 1 segundo
}

function pause() {
    clearInterval(interval); //função para parar o temporizador
}

function toStop() {
    clearInterval(interval); // parar o temporizador
    seconds = 0; // zera os segundos
    minutes = 0; // zera os minutos
    document.getElementById('time').innerText = '00:00:00'; // reseta o tempo do cronômetro
}

function timer() { // esta função faz com que a cada 60 segundos vire 1 minuto e volte os segundos para 00 e faça a contagem de novo, o mesmo vale para os minutos e horas
    seconds++; // incrementação dos segundos
    if(seconds == 60) {
        minutes++; // incrementação dos minutos
        seconds = 0; // zera os segundos
        if(minutes == 60) {
            minutes = 0; // zera os minutos
            hours++; // incrementação das horas
        }
    }
    document.getElementById('time').innerText = twoDigits(hours)+':'+twoDigits(minutes)+':'+twoDigits(seconds); //mostrará o tempo do cronômetro
}