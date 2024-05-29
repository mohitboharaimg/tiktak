let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".r-btn");
let newbtn = document.querySelector  (".n-btn");
let msgcontainer = document.querySelector(".msg");
let  turno = true;
const winpatterns =[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5 ,8],
  [2, 4, 6],
  [3, 4, 5],
  [7, 6, 8],
];
const disableBoxes = () => {
for (let box of boxes) {
  box.disabled = true;
}
};
 
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";  
  }
  };

boxes.forEach((box) =>{
  box.addEventListener("click", () => {
    if (turno) {
      box.innerText = "O";
      turno = false
    }
    else {
      box.innerText = "X";
      turno = true;
    }
    box.disabled = true;
    checkWinner();
  }
);
}
); 
const showWinner = (winner) => {
  // msg.innerText = `winner is $(winner)`;
  msgcontainer.classList.remove("hide");
  disableBoxes ();

};
 
const checkWinner = () => {
  for (let pattern of winpatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    if (pos1Val != "" && pos2Val != "" && pos3Val != "" ){
      if (pos1Val === pos2Val && pos2Val === pos3Val  ) {
       showWinner(pos1Val);
      }
       
  }
}
};
const resetGame = () => {
  turno = true
  enableBoxes();  
  msgcontainer.classList.add("hide");
};
newbtn.addEventListener('click', resetGame);
resetBtn.addEventListener('click', resetGame);