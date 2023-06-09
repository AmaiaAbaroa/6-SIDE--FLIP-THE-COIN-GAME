const coin = document.querySelector(".coin");
const head = document.getElementById("head")
const tail = document.getElementById("tail")
const playButton = document.querySelector("#play-btn");
const resetButton = document.querySelector("#reset-btn");

let sideA = 0;
let sideB = 0;
let sideC = 0;
let sideD = 0;
let sideE = 0;
let sideF = 0;

playButton.addEventListener("click",() =>{
    const headImg = Math.ceil(Math.random() * 6);
    const tailImg = Math.ceil(Math.random() * 6);

    coin.style.animation = "none";

    head.src = `./img/img-${headImg}.png`
    tail.src = `./img/img-${tailImg}.png`

    if(headImg === 1) {
        sideA = spinning(sideA)
    }

    if (headImg === 2){
        sideB = spinning(sideB)
        console.log("sideB", sideB)
    } 

    if (headImg === 3) {
        sideC = spinning(sideC)
    }

    if (headImg === 4){
        sideD = spinning(sideD)
    }
    if (headImg === 5){
        sideE = spinning(sideE)
    }
    if (headImg === 6){
        sideF = spinning(sideF)
    }

    setTimeout (updateCounter, 3000);
    disableButton();
    });

    function updateCounter(){
        document.querySelector("#Aside-counter").textContent = `A-Side: ${sideA}`;
        document.querySelector("#Bside-counter").textContent = `B-Side: ${sideB}`;
        document.querySelector("#Cside-counter").textContent = `C-Side: ${sideC}`; 
        document.querySelector("#Dside-counter").textContent = `D-Side: ${sideD}`; 
        document.querySelector("#Eside-counter").textContent = `E-Side: ${sideE}`; 
        document.querySelector("#Fside-counter").textContent = `F-Side: ${sideF}`; 
    }


resetButton.addEventListener("click",() =>{
    coin.style.animation = "none";
    sideA = 0;
    sideB = 0;
    sideC = 0; 
    sideD = 0; 
    sideE = 0; 
    sideF = 0;
    updateCounter();
});

function disableButton(){
    playButton.disabled = true;
    setTimeout(function(){
        playButton.disabled = false;
    },3000);
};


function spinning(coinSide){
    setTimeout(function(){
        coin.style.animation = "spin-Aside 3s forwards";
    }, 100);
    console.log('coinside', coinSide)
    return ++coinSide;
}