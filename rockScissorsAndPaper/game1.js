let computer = document.getElementById("computer");
console.log(computer);
let player = document.getElementById("player");
let score = document.getElementById("score");
let computerChoice;
let playerCoiche;
let rand;
let playerScore = 0;
let computerScore = 0;
let massage;

let myButtuns = document.querySelectorAll(".button");
myButtuns.forEach(myButtun => myButtun.addEventListener("click", myChocing));
function myChocing(e) {
    playerCoiche = e.target.id;
    console.log(playerCoiche);
    player.textContent = playerCoiche;
    randChooce();
    roles();
}
function randChooce() {
    rand = Math.floor(Math.random() * myButtuns.length + 1);
    if (rand === 1) {
        computerChoice = "paper";
    }
    if (rand === 2) {
        computerChoice = "scissors";
    }
    if (rand === 3) {
        computerChoice = "rock";
    }
    computer.textContent = computerChoice
}

function roles() {
    if(computerChoice === playerCoiche ){
        massage = "It's equality!"
    }
    if((computerChoice === "rock") && (playerCoiche === "scissors") ){
        massage = "you loose!"
    }
    if((computerChoice === "rock") && (playerCoiche === "paper") ){
        massage = "you win!"
    }
    if((computerChoice === "scissors") && (playerCoiche === "paper") ){
        massage = "you loose!"
    }
    if((computerChoice === "scissors") && (playerCoiche === "rock") ){
        massage = "you win!"
    }
    if((computerChoice === "paper") && (playerCoiche === "scissors") ){
        massage = "you win!"
    }
    if((computerChoice === "paper") && (playerCoiche === "rock") ){
        massage = "you win!"
    }
    score.textContent = massage;
}
