function setup() {
  createCanvas(500, 500);
  noFill();
  for(let i=0; i<6; i++){
    for(let j=0; j<5; j++){
      x = int(random(0, 500));
      y = int(random(0, 500));
      z = int(random(0, 500));
      c = int(random(0, 500));
      rect(z, c, x, y);
    }           
  }
}


function draw() {
  
}
