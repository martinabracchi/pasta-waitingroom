let socket = io();


socket.on("connect", newConnection);
socket.on('mouseBroadcast', drawOtherMouse);

function preload(){
  // put preload code here
  bf = loadImage('assets/blackfork.png');
  wf = loadImage('assets/whitefork.png');
}


function newConnection() {
  console.log("your id:", socket.id);
}

function drawOtherMouse(data){

clear();
imageMode(CENTER);
if(windowWidth<990){
image(bf, data.x * width, data.y *height, windowWidth/4,windowWidth/4);
}else{
image(bf, data.x * width, data.y * height, windowWidth/10,windowWidth/10);
}
}




function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent('canvacontainer');
  noCursor();
  // cnv.style(z-index, 100)
}

function mouseMoved() {
clear();
imageMode(CENTER);
if(windowWidth<990){
  image(wf, mouseX, mouseY, windowWidth/4, windowWidth/4)
}else{
image(wf, mouseX, mouseY, windowWidth/10, windowWidth/10);
}
let message = {
  x: mouseX/width,
  y:mouseY/height,
};


socket.emit("mouse", message)
}




function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
