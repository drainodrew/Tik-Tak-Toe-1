console.log('hi'); 
let board = document.querySelectorAll(".box")
let updates = document.querySelector(".updates")
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
      if (j == 9 || k == 9) {
     updates.innerHTML = 'tie?'
   }
    if (board[0].style.background === "blue" && board[1].style.background === "blue" && board[2].style.background === "blue") {
      updates.innerHTML = `"blue wins, red you are worthless and nobody loves you`
    }
    if (board[0].style.background === "blue" && board[3].style.background === "blue" && board[6].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
    if (board[0].style.background === "blue" && board[4].style.background === "blue" && board[8].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
    if (board[3].style.background === "blue" && board[4].style.background === "blue" && board[5].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
    if (board[6].style.background === "blue" && board[7].style.background === "blue" && board[8].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
    if (board[6].style.background === "blue" && board[4].style.background === "blue" && board[2].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
    if (board[1].style.background === "blue" && board[4].style.background === "blue" && board[7].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
    if (board[0].style.background === "blue" && board[1].style.background === "blue" && board[2].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
    if (board[2].style.background === "blue" && board[5].style.background === "blue" && board[8].style.background === "blue") {
      updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
    }
      if (board[2].style.background === "blue" && board[4].style.background === "blue" && board[6].style.background === "blue") {
        updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
      }
    return
  }

    if (j == 1 && board[i].style.background !== "blue" && board[i].style.background !== "red") {
      board[i].style.background = "red"
      j--
      k++
  
    if (board[0].style.background === "red" && board[1].style.background === "red" && board[2].style.background === "red") {
      updates.innerHTML = `"red wins, blue you are worthless and nobody loves you`
    }
    if (board[0].style.background === "red" && board[3].style.background === "red" && board[6].style.background === "red") {
      updates.innerHTML = "red wins, blue you are worthless and nobody loves you"
    }
    if (board[0].style.background === "red" && board[4].style.background === "red" && board[8].style.background === "red") {
      updates.innerHTML = "red wins, blue you are worthless and nobody loves you"
    }
    if (board[3].style.background === "red" && board[4].style.background === "red" && board[5].style.background === "red") {
      updates.innerHTML = "red wins, blue you are worthless and nobody loves you"
    }
    if (board[6].style.background === "red" && board[7].style.background === "red" && board[8].style.background === "red") {
      updates.innerHTML = "red wins. blue you lost a game of tic-tac-toe, maybe the easiest game in the world to not lose? idiot."
    }
    if (board[6].style.background === "red" && board[4].style.background === "red" && board[2].style.background === "red") {
      updates.innerHTML = "red wins. blue quit trying"
    }
    if (board[1].style.background === "red" && board[4].style.background === "red" && board[7].style.background === "red") {
      updates.innerHTML = "red wins, blue... fuck you"
    }
    if (board[0].style.background === "red" && board[1].style.background === "red" && board[2].style.background === "red") {
      updates.innerHTML = "red wins! blue, has anyone ever told you that you are ugly and a waste of oxygen?"
    }
    if (board[2].style.background === "red" && board[5].style.background === "red" && board[8].style.background === "red") {
      updates.innerHTML = "red wins. blue, i wish i could say this wasn't a reflection on your character, but that'd be a lie. you were born a loser and will always lose."
    }
      if (board[2].style.background === "red" && board[4].style.background === "red" && board[6].style.background === "red") {
        updates.innerHTML = "blue wins, red you are worthless and nobody loves you"
      }
  }
  })
}

gameReset.addEventListener("click", function reset(e) {
updates.innerHTML = ''
board.forEach(element => element.style.background = "#fffff0")
})
