cl = console.log;
const buttuns = document.querySelectorAll(".pic");
const specialButton = document.querySelector(".blue");
const scorePlace = document.getElementById("scorePlace");
const timePlace = document.getElementById("timePlace");
const gameOver = document.getElementById("gameOver");
const gameDiv = document.getElementById("gameDiv");
let myIntervl = 500; 
let score = 0;
let timer = 60;



function getRandButtun() {
    buttuns.forEach(buttun => buttun.classList.remove("blue"));
    let rand = Math.floor(Math.random() * buttuns.length);
    buttuns[rand].classList.add("blue");
}



function playRoles() {
    buttuns.forEach(buttun => buttun.addEventListener("mousedown", (e) => {
        if (e.target.className === "pic blue") {
            score++;
            scorePlace.textContent = score;
            // myIntervl = myIntervl - 100;
            // cl(myIntervl);
        }
    }));
}
function setTimer() {
    timePlace.textContent = timer;
    timer -= 1;
    cl(timer)
    if (timer === 0) {
        cl("boaz")
        // this.gameDiv.style.display = "none"; 
        // this.gameOver.style.display = "block";
        // return alert("game over");
    }
}

function playByTime() {
    setInterval(getRandButtun, myIntervl);
    playRoles();
    setInterval(setTimer, 1000);
}
playByTime();
