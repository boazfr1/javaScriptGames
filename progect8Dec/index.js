let cl = console.log;
let myButtons = document.querySelectorAll("button");

for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener("click", playByTime)
}

function playByTime(event) {
    showImgCable(event);
    setTimeout(()=>{showImgCable(event)}, 1000);
    setTimeout(()=>{showImgSwitch(event)}, 1010);
    setTimeout(()=>{showImgSwitch(event)}, 2000);
    setTimeout(()=>{showImgCable(event)}, 2010);
    setTimeout(()=>{showImgCable(event)}, 2999);
    setTimeout(()=>{checkAndSend(event)},3000)
}
function showImgCable(event) {
    cl("boaz");
    let imgId = event.target.id;
    let currentImg = document.getElementById(`imgCable-${imgId}`);
    if (currentImg.style.display === "none") {
        currentImg.style.display = "block";
    }
    if (currentImg.style.display === "block") {
        currentImg.style.display = "none";
    } 
}
let switchImg = document.getElementById("switchImg");
function showImgSwitch() {
    cl("noam")
    if (switchImg.style.display === "none") {
        switchImg.style.display = "block";
    }
    if (switchImg.style.display === "block") {
        switchImg.style.display = "none";
    } 
}

let calient1 = document.getElementById("client-1");
let calient2 = document.getElementById("client-2");
let calient3 = document.getElementById("client-3");
let massage1 = document.getElementById("massage1");
let massage2 = document.getElementById("massage2");
let massage3 = document.getElementById("massage3");
let mas1 = document.getElementById("mas1");
let mas2 = document.getElementById("mas2");
let mas3 = document.getElementById("mas3");

let clientValue;
let massageValue;


function checkAndSend(event) {
    let myId = event.target.id;
    let currentClient = document.getElementById(`client-${myId}`);
    clientValue = currentClient.value;

    let massgeClient = document.getElementById(`massage${myId}`);
    massageValue = massgeClient.value;

    if (myId * 1 === 1) {
        // cl("boaz");
        if (clientValue * 1 === 1) {
            mas1.innerHTML = massageValue;
        }
        if (clientValue * 1 === 2) {
            mas2.innerHTML = massageValue;
            // cl("boaz")
        }
        if (clientValue * 1 === 3) {
            mas3.innerHTML = massageValue;
        }
        
    }
    else if (myId * 1 === 2) {
        if (clientValue * 1 === 1) {
            mas1.innerHTML = massageValue;
        }
        if (clientValue * 1 === 2) {
            mas2.innerHTML = massageValue;
        }
        if (clientValue * 1 === 3) {
            mas3.innerHTML = massageValue;
        }
    }
    else if (myId * 1 === 3) {
        if (clientValue * 1 === 1) {
            mas1.innerHTML = massageValue;
        }
        if (clientValue * 1 === 2) {
            mas2.innerHTML = massageValue;
        }
        if (clientValue * 1 === 3) {
            mas3.innerHTML = massageValue;
        }
    } else {
        alert("pleace check if you wrote a nuber between  1 - 3 in the first place.");
    }
}