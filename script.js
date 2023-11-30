//Timer handling
time = minToSec(1, 25);
interval = setInterval(() => {updateTimer()}, 1000);
console.log(interval);

// Button incrementation
let button = document.getElementById("increment");
button.addEventListener("click", () => updateScore(shot, succes));