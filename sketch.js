var arcColor = 255
var rectColor = 255
var triColor = 255

function setup() {
  createCanvas(500,500)
}

function draw() {
  fill(arcColor);
  arc(180,350,80,80,0,PI+QUARTER_PI, PIE);
  fill(rectColor);
  rect(10,50,75,100);
  line(180,350,180,175);
  line(10,100,85,100);
  line(47.5,50,47.5,150);
  fill(triColor);
  triangle(250,125,298.3,70,350,125);
  
}
 function mouseReleased(){
    arcColor = 148;
    rectColor = 200;
    triColor = 0; 
  }
  function mousePressed(){
   arcColor = 255;
rectColor = 255;
triColor = 255;
  }
