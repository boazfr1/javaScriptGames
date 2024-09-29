let cl = console.log;
let myPics = [
    {
        name: "father",
    img:"images/father.jpg"
    },
    {
        name: "mother",
    img:"images/mother.jpg"
    },
    {
        name: "boaz",
    img:"images/boaz.jpg"
    },
    {
        name: "noam",
    img:"images/noam.jpg"
    },
    {
        name: "dvir",
    img:"images/dvir.jpg"
    },
    {
        name: "nave",
    img:"images/nave.jpg"
    },
    {
        name: "carmel",
    img:"images/carmel.jpg"
    },
    {
        name: "lavanon",
    img:"images/levanon.jpg"
    },
    {
        name: "natzah",
    img:"images/netzah.jpeg"
    },
    {
        name: "nahala",
    img:"images/nahala.jpg"
    },
    {
        name: "ortzion",
    img:"images/ortzion.jpg"
    },
    {
        name: "aluma",
    img:"images/aluma.jpg"
    },
    {
        name: "father",
    img:"images/father.jpg"
    },
    {
        name: "mother",
    img:"images/mother.jpg"
    },
    {
        name: "boaz",
    img:"images/boaz.jpg"
    },
    {
        name: "noam",
    img:"images/noam.jpg"
    },
    {
        name: "dvir",
    img:"images/dvir.jpg"
    },
    {
        name: "nave",
    img:"images/nave.jpg"
    },
    {
        name: "carmel",
    img:"images/carmel.jpg"
    },
    {
        name: "lavanon",
    img:"images/levanon.jpg"
    },
    {
        name: "natzah",
    img:"images/netzah.jpeg"
    },
    {
        name: "nahala",
    img:"images/nahala.jpg"
    },
    {
        name: "ortzion",
    img:"images/ortzion.jpg"
    },
    {
        name: "aluma",
    img:"images/aluma.jpg"
    },
];

myPics.sort(() => Math.random() - 0.5);

let gameplace = document.querySelector("#gameplace");
let score = 0;


function createpics() {
    for (let i = 0; i < myPics.length; i++) {
        let myImg = document.createElement("img");
        myImg.setAttribute("src", "images/flowers.jpg");
        myImg.setAttribute("id", i);
        gameplace.appendChild(myImg);
        myImg.addEventListener("click", flipPics);
    }
    
};
createpics();

let arrForChekIfEqual = [];
function flipPics(){
    let idOfPic = this.getAttribute("id")
    this.setAttribute("src", myPics[idOfPic].img);
    arrForChekIfEqual.push(this);
    cl(this);
    cl(arrForChekIfEqual);
    cl(arrForChekIfEqual.length);
    if (arrForChekIfEqual.length === 2) {
        setTimeout(areTheyEqual, 1000);
    } 
};

function areTheyEqual() {
    if (arrForChekIfEqual[0].id === arrForChekIfEqual[1].id) {
        alert("you clicked on the same one! try again.")
    }
    if ((arrForChekIfEqual[0].src === arrForChekIfEqual[1].src) &&
     (arrForChekIfEqual[0].id != arrForChekIfEqual[1].id)) {
        arrForChekIfEqual[0].setAttribute("src", "images/myDak.jpg");
        arrForChekIfEqual[1].setAttribute("src", "images/myDak.jpg");
        arrForChekIfEqual[0].removeEventListener("click", flipPics);
        arrForChekIfEqual[1].removeEventListener("click", flipPics);
        arrForChekIfEqual = [];
        score++;
        
        if (score === 12) {
            return alert("you win");
        }
    } else {
        arrForChekIfEqual[0].setAttribute("src", "images/flowers.jpg");
        arrForChekIfEqual[1].setAttribute("src", "images/flowers.jpg");
        arrForChekIfEqual = [];
    }
};