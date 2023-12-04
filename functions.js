function updateScore(){
    let baliseScore = document.getElementById("score");

    shot++;
    succes++;

    let score = `Ton score : ${succes}/${shot}`;
    baliseScore.innerHTML = score;
}

function setTimer(time){
    let baliseTimer = document.getElementById("timer");
    baliseTimer.innerHTML = ` ${Math.floor(time/60)}min${time%60}sec `;
    if (time == 0) {
        console.log("Fin");
        clearInterval(interval);
    }
    console.log(time, baliseTimer);
}

function updateTimer(){
    console.log("update");
    if (time >= 0) {
        setTimer(time--);
    } else { 
        clearInterval(interval);
    }   
}

function minToSec(min, sec = 0){
    return min*60 + sec;
}

function initialize(){
    time = minToSec(1, 1);
    setTimer(time--);
}


function startTimer(){
    interval = setInterval(updateTimer, 1000);
}

function hideButtonStart(){
    let buttonStart = document.getElementById("start");
    buttonStart.removeEventListener("click", start);
    buttonStart.remove();
}

function start(){
    initialize();
    hideButtonStart();
    startTimer();
}