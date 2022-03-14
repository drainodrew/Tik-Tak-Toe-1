console.log('hi'); 

let box1 = document.querySelector("#box1")
let box2 = document.querySelector("#box2")
let box3 = document.querySelector("#box3")
let box4 = document.querySelector("#box4")
let box5 = document.querySelector("#box5")
let box6 = document.querySelector("#box6")
let box7 = document.querySelector("#box7")
let box8 = document.querySelector("#box8")
let box9 = document.querySelector("#box9")

let inPlay = true;
let boxVal = ['', '', '', '', '', '', '', '','']

function clickedBox(click) {
  const alreadyClicked = click.target;

  if (boxVal[alreadyClicked] !== "" || !gameActive) {
    return;
  }
}





box.addEventListener("click", function changeColor(e) {
  e.preventDefault;
  return e.target.style.background = "blue", e.target.style.background = "red";

})