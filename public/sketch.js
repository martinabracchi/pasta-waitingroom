let socket = io();
socket.on("connect", newConnection);

function newConnection() {
  console.log("your id:", socket.id);
}


function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight)
  // put setup code here
}

function draw() {
  // put drawing code here
  ellipse(mouseX, mouseY, 30)
}
