let bird;
let myObstacle = [];
let rand;
let myScore;

// a function for enitiolasing thing in the canvas
function startGame() {
    bird = new component(30, 30, "red", 10, 120);
    myScore = new component("30px", "Consolas", "black", 280, 40, "text");
    myGameArea.start();
};

// properties and methods of the canvas
let myGameArea = {
    canvas: document.querySelector("canvas"),
    start: function () {
        this.canvas.width = 600;
        this.canvas.height = 400;
        this.canvas.style.border = "1px solid black"
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]); 
        this.interval = setInterval(updateGameArea, 20);
        this.frameNo = 0;       
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
          })
          window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
          })
    },

    // function for clear the canvas
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    // function for stopping the interval when the bird is crashing
    stop : function() {
        clearInterval(this.interval);
    },
}
// function for calc the time for know when to add another obs
function everyinterval(n) {
    if ((myGameArea.frameNo / n) % 1 == 0) {return true;}
    return false;
  };


// the fuctory of my characters, properties and method of the element himself
class component{
    constructor(width, height, color, x, y, type){
        this.type = type,
        this.width = width,
        this.height = height,
        this.color = color,
        this.x = x,
        this.y = y,
        this.speedX = 0;
        this.speedY = 0;
    }
    // function for drowing the element
    update(){
        if (this.type == "text") {
            this.ctx = myGameArea.context;
            this.ctx.font = this.width + " " + this.height;
            this.ctx.fillStyle = this.color;
            this.ctx.fillText(this.text, this.x, this.y);
        } else {
            this.ctx = myGameArea.context;
            this.ctx.fillStyle = this.color,
            this.ctx.fillRect(this.x, this.y, this.width, this.height)  
        }
    }
    // function for mooving the element
    newPos(){
        this.x += this.speedX;
        if (this.x > 580) {
            this.x = 570;
        }
        if (this.x < 0) {
            this.x = 0;
        }
        this.y += this.speedY;
        if (this.y > 380) {
            this.y = 370;
        }
        if (this.y < 0) {
            this.y = 0;
        }
    }
    // function for check crashing between two elements
    crashWith(otherobj){
        let birdLeft = this.x;
        let birdRight = this.x + (this.width);
        let birdTop = this.y;
        let birdBottom = this.y + (this.height);
        let otherleft = otherobj.x;
        let otherright = otherobj.x + (otherobj.width);
        let othertop = otherobj.y;
        let otherbottom = otherobj.y + (otherobj.height);
        let crash = true;
        if ((birdBottom < othertop) ||
        (birdTop > otherbottom) ||
        (birdRight < otherleft) ||
        (birdLeft > otherright)) {
        crash = false;
        }
        return crash;
  }
}

// mooving and gravity. setinterval by 20
function updateGameArea() {
    for (let i = 0; i < myObstacle.length; i++) {
        if (bird.crashWith(myObstacle[i])) {
            myGameArea.stop;
            return;
        }     
    }
    myGameArea.clear();
    myGameArea.frameNo += 1;
    // create new obs by 150 milisecond
    if (myGameArea.frameNo == 1 || everyinterval(150)) {
        rand = Math.floor(Math.random()* 200);
        x = myGameArea.canvas.width;
        y = rand;
        myObstacle.push(new component(40, 250, "green", x, y));
    }
    // mooving the obsticles
    for (i = 0; i < myObstacle.length; i += 1) {
        myObstacle[i].x += -1;
        myObstacle[i].update();
    }
    bird.speedX = 0;
    bird.speedY = 0;
    if (myGameArea.key && myGameArea.key === 37) {
        bird.speedX = -3; 
    }
    if (myGameArea.key && myGameArea.key === 39) {
        bird.speedX = 3; 
    }
    if (myGameArea.key && myGameArea.key === 38) {
        bird.speedY = -3; 
    }
    if (myGameArea.key && myGameArea.key === 40) {
        bird.speedY = 3; 
    }
    myScore.text = "SCORE: " + myGameArea.frameNo;
    myScore.update();
    bird.update();
    bird.newPos();
}

startGame();