let cl = console.log; 
const bird = document.getElementById("bird");
const rock = document.querySelectorAll(".rock");
const hall = document.querySelectorAll(".hall");

let birdPositionX = 50;
let birdPositionY = 150;

let rockStartPositionX = 300;
let rockPositionNowX = rockStartPositionX;

let hallStartPositionY;
let hallPositionnowY = hallStartPositionY ;
let hallStartPositionX = 300;
let hallPositionNowX = hallStartPositionX;
let rockVel = -2;

let gravityVel = -2;
let jumpVel = 50;

function birdLokation() {
    bird.style.left = birdPositionX + "px";
    bird.style.bottom = birdPositionY + "px";
}
function gravity() {
    birdLokation();
    birdPositionY = birdPositionY + gravityVel;
    if (birdPositionY === 0) {
        gravityVel = 0;
        // gameOver();
    }
}
function birdJump() {
    birdLokation();
    if (birdPositionY < 500) {
        jumpVel = 50;
        birdPositionY = birdPositionY + jumpVel;
    }
    
    if (birdPositionY > 500) {
        jumpVel = 0;
    }
}
function rockLokation() {
    for (let i = 0; i < rock.length; i++) {
        rock[i].style.left = rockPositionNowX + "px";
        rockPositionNowX += 300;
    }
}
rockLokation()
//function moovingRock() {
  //  for (let i = 0; i < rock.length; i++) {
    //    rock[i].style.left = rockPositionNowX + "px";
      //  rockPositionNowX = rockPositionNowX + rockVel;
  //  }
//}
function hallLokation() {
    for (let i = 0; i < hall.length; i++) {
        hall[i].style.left = hallPositionNowX + "px";
        hallPositionNowX += 300;
    }
}
hallLokation()
setInterval(gravity, 50);
setInterval(moovingRock, 50);
document.addEventListener("click", birdJump);