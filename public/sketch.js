let socket = io();
socket.on("connect", newConnection);

function newConnection() {
  console.log("your id:", socket.id);
}


function preload(){
  // put preload code here
}

function setup() {
  let cnv = createCanvas(windowWidth,windowHeight);
cnv.style('z-index', '0')
  // put setup code here
}

function draw() {
  // put drawing code here
  background('white');
  ellipse(mouseX, mouseY, 30);
  console.log(mouseX)
}
