function setup() {
  frameRate(30);
}

function draw() {
  let cnv = createCanvas(300, 200);
  cnv.parent("m1");
  background(225,225,0);
  noStroke();
  x=map(mouseX,0,windowWidth,0,225);
  y=map(mouseY,0,windowHeight,10,120);
  fill(x,y,255);
  ellipse(mouseX,mouseY,150,150);
  ellipse(pmouseX,pmouseY,150,150);
  
  fill(255,255,0);
  text("this is the text",150,100);
  textAlign("center");
  
  
}
