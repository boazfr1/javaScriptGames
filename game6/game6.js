let cl = console.log;
let main = document.querySelector("#main");
let startBallPositionX;
let startBallPositionY;

let currentBallPositionX;
let currentBallPositionY;

let startPlayerPositionX = 45;
let startPlayerPositiony = 73;

let currentPlayerPositionX;
let currentPlayerPositiony;



class element{
    constructor(x, y, width, height, color, name){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.name = name;
        this.speed = 1;
    }
    draw(){
        this.name = document.createElement("div");
        main.appendChild(this.name);
        this.name.style.width = this.width + "vw";
        this.name.style.height = this.height + "vh";
        this.name.style.backgroundColor = this.color;
        this.name.style.position = "absolute";
        this.name.style.top = this.y + "vh";
        this.name.style.left = this.x + "vw";
    }
    gravity(){
        // this.draw();
        this.name.style.top = this.y + this.speed + "vh";
        this.y = this.y + this.speed;
        currentBallPositionY = this.y;
        cl("gravity" ,currentBallPositionY)

        if (this.y === 77) {
            main.removeChild(this.name);
            // this.name.classList.add("dispeerd");
        }
    }
    update(){
        this.gravity();
    }
    
    myInterval(){
        setInterval(this.update.bind(this), 100);
    }
};

class ball extends element {
    constructor(x, y, width, height, color, name){
        super(x, y, width, height, color, name)
    }
    addClass(){
        this.name.classList.add("ball");
    }
    checkIfCrash(){
        cl(currentBallPositionY)
        // if (currentBallPositionY === 70) {
        //     cl("hi boaz")
        // }
    //    cl(currentPlayerPositionX) 
    }
}

class myPlayer extends element {
    constructor(x, y, width, height, color, name){
        super(x, y, width, height, color, name);
        this.speed = 1;
    }
    addClass(){
        this.name.classList.add("player");
    }
    moove(){
        document.addEventListener("keydown",(event) => {
            if(event.key === 'ArrowRight'){
                this.name.style.left = this.x + "vh";
                this.x = this.x + this.speed;
                currentPlayerPositionX = this.x;
                // cl(currentPlayerPositionX);
                if (this.x > 140) {
                    this.speed = 0;
                } else{
                    this.speed = 1;
                };
            }
            if(event.key === 'ArrowLeft'){
                this.name.style.left = this.x + "vh";
                this.x = this.x - this.speed;
                currentPlayerPositionX = this.x;
                // cl(currentPlayerPositionX);
                if (this.x < 25) {
                    this.speed = 0;
                } else{
                    this.speed = 1;
                };
            }
        })
    }
}

function drawPlayer() {
    // let player = new myPlayer(currentPlayerPositionX, currentPlayerPositiony, 5, 7, "black", "player")
    let player = new myPlayer(45, 73, 5, 7, "black", "player")
    player.draw();
    player.addClass();
    player.moove();
    cl(player);
}

let counter = 1;
function drawElement() {
    let rand1 = Math.floor(Math.random() * 75);
    let rand2 = Math.floor(Math.random() * 5 + 1);
    let newBall = new ball(rand1, 0, rand2, rand2 + 2, "green", `myBall${counter}`)
    newBall.draw();
    newBall.addClass();
    newBall.myInterval();
    newBall.checkIfCrash();
    counter++;
};


function start() {
    drawPlayer();
    setInterval((drawElement), 1000);
};
// start();





