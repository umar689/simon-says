// let start=false;
// let col
// let level=0;
// let colors=["red","blue","yellow","purple"];
// let original=[];
// let game=[];
// let hs=0;
// let p=document.querySelector("p b");
// function levelup(){
//     level++;
//     p.innerText=`level ${level}`;
//     let n=Math.floor(Math.random()*4);
//     let btn=document.querySelector(`#${colors[n]}`);
//     blink(btn);
//     original.push(`${colors[n]}`);
// }

// document.addEventListener("keydown",()=>{
//     if(start==false){
//         levelup();
//         start=true;
//     }
// })
// function blink(btn){
//     btn.classList.add("white");
//     setTimeout(()=>{
//         btn.classList.remove("white");
//     },250);
// }
// function blinkred(btn){
//     btn.classList.add("one");
//     setTimeout(()=>{
//         btn.classList.remove("one");
//     },250);
// }
// function blinkit(btn){
//     btn.classList.add("white");
//     setTimeout(()=>{
//         btn.classList.remove("white");
//     },250);
// }

// let btns=document.querySelectorAll(".h");
// for(let i=0;i<4;i++){
//     btns[i].addEventListener("click",()=>{
//         blinkit(btns[i]);
//         game.push(`${btns[i].getAttribute('id')}`);
//         if(game.length==original.length && game[game.length-1]==original[game.length-1]){
//             setTimeout(()=>{
//                 levelup();
//             },500);
//             game=[];
//         }
//         if(game[game.length-1]!=original[game.length-1] && start==true){
//             let body=document.querySelector("body");
//             body.setAttribute("class","one");
//             setTimeout(()=>{
//                 body.setAttribute("class","none")
//             },250);
//             p.innerHTML=`GAME OVER! Your score was ${level-1}.<br>Press any key to restart`;
//             start=false;
//             original=[];
//             game=[];
//             if(hs<level){
//                 hs=level;
//             }
//             let hsp=document.querySelector(".highest");
//             hsp.innerText=`Highest Score : ${hs-1}`;
//             level=0;
//         }
//     });
// }
let start = false;
let level = 0;
let colors = ["red", "blue", "yellow", "purple"];
let original = [];
let game = [];
let hs = 0;
let p = document.querySelector("p b");

// Audio elements for game sounds
const buttonSound = new Audio("mixkit-game-level-music-689.wav"); // Button sound in root directory
const gameOverSound = new Audio("mixkit-player-losing-or-failing-2042.wav"); // Game-over sound in root directory

// Configure button sound for looping
buttonSound.loop = true;

// Preload audio files to catch loading errors early
buttonSound.load();
gameOverSound.load();

// Fallback for audio errors
function playSound(audio) {
    audio.play().catch((error) => {
        console.error("Audio playback failed:", error);
    });
}

function levelup() {
    level++;
    p.innerText = `level ${level}`;
    let n = Math.floor(Math.random() * 4);
    let btn = document.querySelector(`#${colors[n]}`);
    blink(btn);
    original.push(`${colors[n]}`);
}

document.addEventListener("keydown", () => {
    if (start == false) {
        playSound(buttonSound); // Start looping button sound
        levelup();
        start = true;
    }
});

function blink(btn) {
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    }, 250);
}

function blinkit(btn) {
    btn.classList.add("white");
    setTimeout(() => {
        btn.classList.remove("white");
    }, 250);
}

let btns = document.querySelectorAll(".h");
for (let i = 0; i < 4; i++) {
    btns[i].addEventListener("click", () => {
        blinkit(btns[i]);
        game.push(`${btns[i].getAttribute('id')}`);
        if (game.length == original.length && game[game.length - 1] == original[game.length - 1]) {
            setTimeout(() => {
                levelup();
            }, 500);
            game = [];
        }
        if (game[game.length - 1] != original[game.length - 1] && start == true) {
            buttonSound.pause(); // Stop looping button sound
            buttonSound.currentTime = 0; // Reset to start for next game
            let body = document.querySelector("body");
            body.setAttribute("class", "one");
            playSound(gameOverSound); // Play game-over sound
            setTimeout(() => {
                body.setAttribute("class", "none");
            }, 250);
            p.innerHTML = `GAME OVER! Your score was ${level - 1}.<br>Press any key to restart`;
            start = false;
            original = [];
            game = [];
            if (hs < level) {
                hs = level;
            }
            let hsp = document.querySelector(".highest");
            hsp.innerText = `Highest Score : ${hs - 1}`;
            level = 0;
        }
    });
}