cl = console.log;
const blockWidth = 168;
const blockheight = 35;
const gameArea = document.querySelector(".gameArea");
const myGameOver = document.querySelector(".gameOver")
const winGame = document.querySelector(".winGame")
let startOfPlayer = [400, 15];
let wherePlayerNow = startOfPlayer;
let startOfBall = [470, 45];
let whereballNow = startOfBall;
let live = 4;
let ballVelocityX = 3;
let ballVelocityY = 3;


// biuld an object of block
class block{
    constructor(xPos, yPos){
        this.bottomLeft = [xPos, yPos]
        this.bottomRight = [xPos + blockWidth, yPos]
        this.topLeft = [xPos, yPos + blockheight]
        this.topRight = [xPos + blockWidth, yPos + blockheight]
    }   
}

// arrey of the specific blocks position
let myBlokcsArrey = [
    new block(12, 550),
    new block(180, 550),
    new block(348, 550),
    new block(516, 550),
    new block(684, 550),
    new block(852, 550),
    new block(12, 500),
    new block(180, 500),
    new block(348, 500),
    new block(516, 500),
    new block(684, 500),
    new block(852, 500),
    new block(12, 450),
    new block(180, 450),
    new block(348, 450),
    new block(516, 450),
    new block(684, 450),
    new block(852, 450)
];

// drew the blocks
function drewBlocks() {
    for (let i = 0; i < myBlokcsArrey.length; i++) {
        let collisionBloks = document.createElement("div");
        collisionBloks.classList.add("block");
        collisionBloks.style.left = myBlokcsArrey[i].bottomLeft[0] + "px";
        collisionBloks.style.bottom = myBlokcsArrey[i].bottomLeft[1] + "px";
        gameArea.appendChild(collisionBloks);
    }
}
drewBlocks();

// drew a ball
const ball = document.createElement("div");
ball.classList.add("ball");
gameArea.appendChild(ball);
ball.style.left = whereballNow[0] + "px";
ball.style.bottom = whereballNow[1] + "px";

// create the player
let player = document.createElement("div");
player.classList.add("player")
drewPleyer();
gameArea.appendChild(player);
function drewPleyer() {
    player.style.left = wherePlayerNow[0] + "px";
    player.style.bottom = wherePlayerNow[1] + "px";
}

document.addEventListener("keydown", moovPlayer);
function moovPlayer(e) {
    // moovig the player
    switch(e.key) {
        case "ArrowLeft":
            if (wherePlayerNow[0] > 1) {
                wherePlayerNow[0] -= 15;
                drewPleyer();
            }
            break;
        case "ArrowRight":
            if (wherePlayerNow[0] < 814) {
                wherePlayerNow[0] += 25;
                drewPleyer();
            }
            break;    
    }
};

// mooving the ball
setInterval(moovingBall, 10);

function moovingBall() {
    ball.style.left = whereballNow[0] + "px";
    ball.style.bottom = whereballNow[1] + "px";
    whereballNow[0] += ballVelocityX;
    whereballNow[1] += ballVelocityY;
    checkIfBallStack();
}

function changeVelocity() {
    if (ballVelocityX === 3 && ballVelocityY === 3) {
        ballVelocityY = -3;
        return;
    }
    if (ballVelocityX === 3 && ballVelocityY === -3) {
        ballVelocityX = -3;
        return;
    }
    if (ballVelocityX === -3 && ballVelocityY === -3) {
        ballVelocityY = 3;
        return;
    }
    if (ballVelocityX === -3 && ballVelocityY === 3) {
        ballVelocityX = 3;
        return;
    }
}
// check if the ball stack in the wall or the bloks
function checkIfBallStack() {
    if (whereballNow[0] > 969 || whereballNow[0] < 1) {
        changeVelocity();
    }
    if (whereballNow[1] > 569) {
        changeVelocity();
    }
    if (whereballNow[1] < 10) {
        changeVelocity();
        // cl(live)
        // live  = live - 1 ;
        // if (live === 0) {
        //     gameOver();
        // }
    }
    checkIfBallStackInBloks();
    chekIfStackInPlayer();
}

function checkIfBallStackInBloks() {
    for (let j = 0; j < myBlokcsArrey.length; j++) {
        if ((whereballNow[0] > myBlokcsArrey[j].bottomLeft[0] 
        && whereballNow[0] < myBlokcsArrey[j].bottomRight[0]) &&
        (whereballNow[1] + 30 > myBlokcsArrey[j].bottomLeft[1] 
        && whereballNow[1] + 30 < myBlokcsArrey[j].topLeft[1])) {
            const allMyBlocks = Array.from(document.querySelectorAll(".block"))    
            allMyBlocks[j].classList.remove("block");
            myBlokcsArrey.splice(j,1)
            changeVelocity();
            if (myBlokcsArrey.length === 0) {
                gameWin();
            }
        }
    }
}
function chekIfStackInPlayer() {
    if ((whereballNow[1] === (wherePlayerNow[1] + 30)) 
    && (whereballNow[0] > wherePlayerNow[0]) 
    && (whereballNow[0] < (wherePlayerNow[0] + 180))) {
        changeVelocity();
    };
};
function gameOver() {
    gameArea.style.display = "none";
    myGameOver.style.display = "inline";
};
function gameWin() {
    gameArea.style.display = "none";
    winGame.style.display = "inline";
}