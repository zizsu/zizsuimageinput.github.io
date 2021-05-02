let img;

let x = 0;
let y = 0;
let easing = 0.005;


function preload(){
    img = loadImage('data/sky.jpg');
}

function setup(){
    createCanvas(500, 500);
}

function draw(){
    background(200);
    image(img, 50, 50);

    noStroke();
    fill(0);
    ellipse(370, 430, 140, 40);
    fill(220);
    circle(350, 390, 90);
    fill(225);
    circle(370, 390, 70);
    

    strokeWeight(10);      // 창문
    stroke(255, 255, 255, 100);
    line(50, 50, 350, 50);
    line(50, 50, 50, 218);
    line(350, 50, 350, 218);
    line(50, 218, 350, 218);
    line(350 * 0.5, 50, 350 * 0.5, 218);
    line(50, 218 * 0.5, 350, 218 * 0.5);

    let targetX = mouseX;
    x += (targetX - x) * easing;
    let targetY = mouseY;
    y += (targetY - y) * easing;
    
    noStroke();
    circle(x, y, 50);
   

    if (mouseIsPressed) {
      if (mouseButton == LEFT) {
       circle(x, y, 80);   
    } else {
        fill(150);
    }
    
        
      }
    
}