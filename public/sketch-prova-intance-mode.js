

let forchette = function(p){

  let socket = io();


  socket.on("connect", p.newConnection);
  socket.on('mouseBroadcast', p.drawOtherMouse);

  p.preload = function(){
    bf = p.loadImage('assets/blackfork.png');
    wf = p.loadImage('assets/whitefork.png');
  }

  p.newConnection = function(){
    console.log('your id:', socket.id)
  }

p.drawOtherMouse = function(data){
      p.clear();
  p.imageMode(p.CENTER);

  if(p.windowWidth < 990){
    p.image(bf, p.data.x * p.width, p.data.y * p.height, p.windowWidth/4, p.windowWidth/4)
  } else{
    p.image(bf, p.data.x * p.width, p.data.y * p.height, p.windowWidth/10, p.windowWidth/10);
  }
}


p.setup = function(){
  let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
  p.noCursor();
}

p.mouseMoved = function(){
      p.clear();
  p.imageMode(p.CENTER);
  if(p.windowWidth<990){
    p.image(wf, p.mouseX, p.mouseY, p.windowWidth/4, p.windowWidth/4)
  }else{
  p.image(wf, p.mouseX, p.mouseY, p.windowWidth/10, p.windowWidth/10);
  }

  let message = {
    x: p.mouseX/p.width,
    y: p.mouseY/p.height,
  }


  socket.emit("mouse", p.message)
}


p.windowResized = function(){
  p.resizeCanvas(p.windwWidth, p.windowHeight)
}


}
let p1 = new p5(forchette);
