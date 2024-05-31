let direction = {x: 0, y: 0};
const foodSound = new Audio ('./Newfolder/success-48018.mp3');
const gameOverSound = new Audio ('./Newfolder/game-over-160612.mp3');
const moveSound = new Audio ('./sunflower-street-drumloop-85bpm-163900.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
  { x: 13, y: 15}
]

// function
function main(ctime){
  window.requestAnimationFrame(main);
  console.log(ctime)
  if((ctime - lastPaintTime)/1000 < 1/speed);{
    return;
  }
lastPaintTime = ctime;
}
function gameEngine(){
  board.innerHTML = "";
}










// main logic here
window.requestAnimationFrame(main);