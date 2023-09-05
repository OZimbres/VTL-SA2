/*-----===VARIÁVEIS===-----*/
const startBtn = document.querySelector(".start-btn");
const pauseBtn = document.querySelector(".pause-btn");
const stopBtn = document.querySelector(".stop-btn");

var seconds = 0o0;
var minutes = 0o0;
var hours = 0o0;
var interval;

/*---=EventListener=---*/
startBtn.addEventListener("click", start);
pauseBtn.addEventListener("click", pause);
stopBtn.addEventListener("click", toStop);

/*---=FUNÇÕES=---*/
function twoDigits(digit) {
    if(digit < 10) {
        return('0'+digit);
    } else {
        return(digit);
    }
}

function start() {
    timer();
   interval = setInterval(timer,1000);
}

function pause() {
    clearInterval(interval);
}

function toStop() {
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    document.getElementById('time').innerText = '00:00:00';
}

function timer() {
    seconds++;
    if(seconds == 60) {
        minutes++
        seconds = 0;
        if(minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('time').innerText = twoDigits(hours)+':'+twoDigits(minutes)+':'+twoDigits(seconds);
}