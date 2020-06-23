var shapeCircle = {
  x: 100,
  y: 100,
  r: 20
}
var showDefocus = false;

var bgColor = {
  r: 0,
  g: 0,
  b: 0
}

var spotColor = {
  r: 200,
  g: 10,
  b: 200,
  a: 120
}


function setup() {
  createCanvas(1366, 768);
  background(bgColor.r, bgColor.g, bgColor.b);
}

function draw() {
  noStroke();
  if (mouseIsPressed) {

    fill(spotColor.r, spotColor.g, spotColor.b);
    circle(shapeCircle.x, shapeCircle.y, shapeCircle.r);
  }
  spotColor.r = random(100, 255);
  spotColor.b = random(100, 190);
  spotColor.g = 0;
  shapeCircle.x = random(0, 1366);
  shapeCircle.y = random(0, 786);

  fill(spotColor.r, spotColor.g, spotColor.b, spotColor.a);
  circle(shapeCircle.x, shapeCircle.y, shapeCircle.r);
}


function showDefocus() {
 

}