var currentColor = "black";
var clickedDown = false;
var colorPalette = [
  "darkred",
  "red",
  "orange",
  "yellow",
  "skyblue",
  "limegreen",
  "green",
  "darkgreen",
  "blue",
  "indigo",
  "violet",
  "black",
  "brown",
  "grey",
  "white"
];

function createCanvas() {
  for (let x = 0; x < 3108; x++) {
    var gameBox = document.createElement("div");

    gameBox.setAttribute("class", "gameBoardBox");

    gameBox.style.backgroundColor = "white";

    gameBox.addEventListener("click", toNewColor);

    gameBox.addEventListener("mouseover", redOnHover);
    gameBox.addEventListener("mouseout", blackOffHover);
    gameBox.addEventListener("mousedown", dragAndPaint);
    gameBox.addEventListener("mouseup", stopDragAndPaint);

    document.querySelector(".boxSection").appendChild(gameBox);
  }
}
createCanvas();

function createPalette() {
  for (let i = 0; i < 16; i++) {
    var paletteBox = document.createElement("div");

    paletteBox.setAttribute("class", "paletteColorBox");
    paletteBox.style.backgroundColor = colorPalette[i];
    if (i == 14) {
      paletteBox.id = "eraseButton";
      paletteBox.textContent = "Erase";
    }
    if (i == 15) {
      paletteBox.id = "eraseAll";
      paletteBox.textContent = "Erase All";
    }
    paletteBox.addEventListener("click", changeColor);

    document.querySelector(".paletteSection").appendChild(paletteBox);
  }
}
createPalette();

document.getElementById("eraseAll").addEventListener("click", eraseAll);

function toNewColor(event) {
  event.target.style.backgroundColor = currentColor;
}

function redOnHover(event) {
  this.style.borderColor = "red";
  if (clickedDown === true) {
    this.style.backgroundColor = currentColor;
  }
}

function blackOffHover(event) {
  this.style.borderColor = "black";
}

function dragAndPaint(event) {
  clickedDown = true;
}

function stopDragAndPaint(event) {
  clickedDown = false;
}

function changeColor(event) {
  currentColor = event.target.style.backgroundColor;
}

function eraseAll(event) {
  document.querySelectorAll(".gameBoardBox").forEach(element => {
    element.style.backgroundColor = "white";
  });
}
