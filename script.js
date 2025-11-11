// ===== JavaScript Test =====

// 1. Test that JS is connected
console.log("JS file is connected and running!");

// 2. Variable: list of colors
let colors = ["lightblue", "lightgreen", "pink", "lavender", "peachpuff"];

// 3. Function: randomly pick a color and change the background
function changeBackground() {
  // choose a random color
  let randomIndex = Math.floor(Math.random() * colors.length);
  let newColor = colors[randomIndex];

  // log the color to console
  console.log("Changing background to:", newColor);

  // change the page background color
  document.body.style.backgroundColor = newColor;

  // also update the message text
  let message = document.querySelector("#message");
  message.innerHTML = "The background color is now " + newColor + "!";
}

// 4. Event listener: run function when button is clicked
let button = document.querySelector("#colorButton");
button.addEventListener("click", changeBackground);
