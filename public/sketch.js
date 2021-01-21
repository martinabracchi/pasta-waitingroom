let socket = io();


socket.on("connect", newConnection);
socket.on('mouseBroadcast', drawOtherMouse);




function newConnection() {
  console.log("your id:", socket.id);
}

function drawOtherMouse(data){
push();
  noStroke();
  fill(color('blue'));
  ellipse(data.x, data.y, 30);
pop();
}


function preload(){
  // put preload code here
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('canvacontainer');
  // cnv.style(z-index, 100)
}

function mouseMoved() {
push();
fill('black');
ellipse(mouseX, mouseY, 30);
pop();

let message = {
  x: mouseX,
  y:mouseY,
};


socket.emit("mouse", message)
}
