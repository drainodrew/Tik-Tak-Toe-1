console.log('hi'); 
let board = document.querySelectorAll(".box")

let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#box2")
let box3 = document.querySelector("#box3")
let box4 = document.querySelector("#box4")
let box5 = document.querySelector("#box5")
let box6 = document.querySelector("#box6")
let box7 = document.querySelector("#box7")
let box8 = document.querySelector("#box8")
let box9 = document.querySelector("#box9")

let reset = document.querySelector(".reset")

let j = 0;
let k = 0;

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener("click", function changeColor(e) {
    e.preventDefault;
    if (j == 0 && board[i].style.background !== "blue" && board[i].style.background !== "red") {
      board[i].style.background = "blue"
      j += 1
      k += 1
    }
    // return e.target.style.background = "blue", e.target.style.background = "red";)
  })
}

// console.log(board)


// let inPlay = true;


// function clickedBox(click) {
//   const alreadyClicked = click.target;

//   if (boxVal[alreadyClicked] !== "" || !gameActive) {
//     return;
//   }
// }
