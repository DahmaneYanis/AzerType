function updateScore(){
    let baliseScore = document.getElementById("score");

    shot++;
    succes++;

    let score = `Ton score : ${succes}/${shot}`;
    baliseScore.innerHTML = score;
}

function updateTimer(){
    let baliseTimer = document.getElementById("timer");
    time--;
    baliseTimer.innerHTML = ` ${Math.floor(time/60)}min${time%60}sec `;
    if (time == 0) {
        clearInterval(interval);
    }
}

function minToSec(min, sec){
    return min*60 + sec;
}