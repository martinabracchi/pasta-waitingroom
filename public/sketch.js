let socket = io();


socket.on("connect", newConnection);
socket.on('mouseBroadcast', drawOtherMouse);
socket.on('color', setColor);
socket.on('newPlayer', newPlayer);

function newPlayer(newPlayerColor){
  console.log(newPlayerColor);

  push();
  fill('purple');
  rectMode(CENTER);
  rect(width / 2 , height/2, width, 50);
  textAlign(CENTER);
  textSize(30);
  fill(newPlayerColor);
  text('New player joined:' + newPlayerColor, width/2, height/2)
  pop();
  }

function setColor(assignedColor){
  myColor = assignedColor;

}

function newConnection() {
  console.log("your id:", socket.id);
}

function drawOtherMouse(data){
  push();
  noStroke();
  fill(data.color);
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
noStroke();
fill(myColor);
ellipse(mouseX, mouseY, 30);
pop();

let message = {
  x: mouseX,
  y:mouseY,
  color: myColor,
};


socket.emit("mouse", message)




}
