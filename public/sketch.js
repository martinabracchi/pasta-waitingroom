let socket = io();
socket.on("connect", newConnection);

function newConnection() {
  console.log("your id:", socket.id);

}

let timer = 5;


function preload(){
  // put preload code here
}

function setup() {
//   let cnv = createCanvas(windowWidth,windowHeight);
// cnv.style('z-index', '0')
  // put setup code here
}

function draw() {
  // put drawing code here
  // background('white');
  // ellipse(mouseX, mouseY, 30);
  // console.log(mouseX)


  function timerdown() {
  if (timer < 1) {
    timer = 0;
  } else {
    timer -= 1
  }
}

document.getElementById('timer').innerHTML = timer

}
