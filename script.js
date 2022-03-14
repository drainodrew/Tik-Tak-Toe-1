console.log('hi'); 
let board = document.querySelectorAll(".box")

let gameReset = document.querySelector(".reset")
console.log(gameReset)
let j = 0;
let k = 0;

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener("click", function changeColor(e) {
    e.preventDefault;
    if (j == 0 && board[i].style.background !== "blue" && board[i].style.background !== "red") {
      board[i].style.background = "blue"
      j++
      k++
    }

    if (j == 1 && board[i].style.background !== "blue" && board[i].style.background !== "red") {
      board[i].style.background = "red"
      j -= 1
      k++
    }
  })
}

gameReset.addEventListener("click", function reset(e) {
  board.forEach(element => element.style.background = "#fffff0");
})