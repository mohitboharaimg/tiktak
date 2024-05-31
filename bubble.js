function makeBubble (){
var clutter = "" ;
for(var i = 1; i<=42; i++){
  var rn = Math.floor(Math.random()*10);
  clutter += `  <div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML  = clutter;
};
var timer = 60;
var score = 0; 
var hitrn = 0; 
function runTimer(){
  setInterval(function () {
    if (timer > 0){
      timer--;
      document.querySelector("#timerval").textContent = timer;
    }
    else{
      document.querySelector("#pbtm").innerHTML = `<h1> game hover </h1>`;
    }
  }, 1000);
}
function getNewHit () {
  hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function increaseScore() {
  score += 10;
  document.querySelector ("#scoreval").textContent = score;
}
document.querySelector("#pbtm")
.addEventListener("click", function (dets){
  var clickednum = (Number(dets.target.textContent));
  if (clickednum === hitrn){
    increaseScore();
    getNewHit();
    makeBubble();
  }
});
const resetGame = () => {
  turno = true
  enableBoxes();  
  
  pbtm.classList.add("hide");
};

getNewHit();
makeBubble();
runTimer();
