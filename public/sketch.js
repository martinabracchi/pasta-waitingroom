let socket = io();


socket.on("connect", newConnection);
socket.on('mouseBroadcast', drawOtherMouse);

function preload(){
  // put preload code here
  bf = loadImage('assets/blackfork.png');
  rf = loadImage('assets/redfork.png');
}


function newConnection() {
  console.log("your id:", socket.id);
}

function drawOtherMouse(data){
push();
clear();
image(bf, data.x, data.y, 120, 120);
pop();
}




function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('canvacontainer');
  // cnv.style(z-index, 100)
}

function mouseMoved() {
push();
clear();
image(rf, mouseX, mouseY, 120, 120);
pop();

let message = {
  x: mouseX,
  y:mouseY,
};


socket.emit("mouse", message)
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
