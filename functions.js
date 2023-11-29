function updateScore(){
    shot++;
    succes++;

    let score = `Ton score : ${succes}/${shot}`;

    let baliseScore = document.getElementById("score");
    baliseScore.innerHTML = score;
}


