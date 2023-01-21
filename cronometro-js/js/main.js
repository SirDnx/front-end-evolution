const startButton = document.querySelector('#startButton');
const pauseButton = document.querySelector('#pauseButton');
const stopButton = document.querySelector('#stopButton');
const timeBox = document.querySelector('#timeBox');

var seconds = 0;
var minutes = 0;
var hours = 0;
var interval;

function twoDigits(digit){
    if(digit < 10){
        return('0' + digit)
    }else{
        return(digit)
    }
}

function start(){
    counter();
    interval = setInterval(counter, 1000)
}

function pause(){
    clearInterval(interval);
}

function stopEvent(){
    clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timeBox.innerText = "00:00:00";
}

function counter(){

    seconds++

    if(seconds == 60){
        minutes++
        seconds = 0
        if(minutes == 60){
            hours++
            minutes = 0
        }
    }

    timeBox.innerText = twoDigits(hours) + ':' + twoDigits(minutes) + ':' + twoDigits(seconds);
}

startButton.addEventListener("click", start);

pauseButton.addEventListener("click", pause);

stopButton.addEventListener("click", stopEvent);
