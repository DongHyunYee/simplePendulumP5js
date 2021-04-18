let origin;
let bob;
let len;
let angle = 45;
let aVel = 0;
let aAcc = 0;
let damping = 0.97;


function setup() {
  createCanvas(640, 360);

  len = 180;
  origin = createVector(width/2, 0);
  bob = createVector(width/2, len);
  
}

function draw() {
  background(51);


  bob.x = origin.x + len * sin(angle);
  bob.y = origin.y + len * cos(angle);

  if(dist(bob.x, bob.y, mouseX, mouseY)< 32/2 && mouseIsPressed)  {

    fill(50);
    bob.x = mouseX;
    bob.y = mouseY;
    }


  
  stroke("FFF");
  fill("FFF");
  point(bob);
  line(origin.x,origin.y, bob.x, bob.y);
  ellipse(bob.x, bob.y, 32,32);

  aAcc = -0.02 * sin(angle);

  angle += aVel;
  aVel += aAcc;

  aVel *= damping;
}

