let socket = io();
socket.on("connect", newConnection);

function newConnection() {
  console.log("your id:", socket.id);

}




function preload(){
  // put preload code here
}

function setup() {
  let cnv = createCanvas(500, 500);
  cnv.parent('canvacontainer');
  // cnv.style(z-index, 100)
}

function draw() {

  background();
  fill('black');
  ellipse(mouseX, mouseY, 30);





}
