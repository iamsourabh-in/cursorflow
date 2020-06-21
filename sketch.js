function setup() {
    createCanvas(1366, 768);
  }
  
  function draw() {
    if (mouseIsPressed) {
        fill(100,0,255);
    } else {
      fill(100,0,255,10);
      noStroke();
    }
    
    rect(mouseX, mouseY, 80, 80);
  }