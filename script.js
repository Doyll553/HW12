// Get the element on the page with the id canvas

let canvas = document.querySelector("#canvas");

let startDrawing = false;

// TODO: Replace with your own emoji

let currentEmoji = "⛹";

  canvas.addEventListener("mousedown", function (event) {
    startDrawing = true;
  console.log("mousedown");
  console.log(event);

  // Create a new emoji div on the page and set it equal to your desired emoji

  let newEmoji = document.createElement("div");
  newEmoji.classList.add("emoji");
  newEmoji.innerHTML = currentEmoji;

  // Set the style of that position so that it goes where you just pressed your mouse down

  newEmoji.style.left = event.pageX + "px";
  newEmoji.style.top = event.pageY + "px";

  // Add that emoji to the canvas element so that it appears on the screen

  canvas.appendChild(newEmoji);
})

// Detect the moment we press the mouse down on the canvas div
// TODO: Add functionality that makes it so the emoji "paints" when you hold your mouse down and move it on the screen

canvas.addEventListener("mousemove", function(event){
  if (startDrawing){
  console.log("mouse event");
  console.log(event);

  let newEmoji = document.createElement("div");
  newEmoji.classList.add("emoji");
  newEmoji.innerHTML = currentEmoji;

  newEmoji.style.left = event.pageX + "px";
  newEmoji.style.top = event.pageY + "px";

  canvas.appendChild(newEmoji);
  } 
})

canvas.addEventListener("mouseup", function(event){
  startDrawing = false;
})

// TODO: Add functionality so when you hit the "Backspace" key, the contents of the canvas clears

document.addEventListener("keydown", function(event){
  if(event.keyCode === 8){
    event.preventDefault();
    canvas.innerHTML = "";
  }
})
