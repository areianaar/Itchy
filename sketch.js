function setup() {
    createCanvas(displayWidth, displayHeight);
    alert("Key statement for peice titled Itchy: Use mouse to manuever icon around the screen to fill background and add texture to the artwork. I wanted to a sense of uneasiness within the user and I felt the best way to do so was to choose colors that contrasted with one another but were also complimentary. The amount of arms the icon has and the decision to have its shadow build up over the canvas adds a unique texture to the peice each time its opened and in turn adds depth to it as well")
    background(225, 216, 18)
  }
  
  function draw() {
  translate(width * 0.0, height * 0.0);
  star(mouseX, mouseY, 30, 70, 25);
  stroke(170, 50, 168);
  fill(66, 50, 168);

  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  }