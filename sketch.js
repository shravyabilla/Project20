
var car, wall;
var speed, weight;

function setup() {
 
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  wall = createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color("black");

  car = createSprite(500, 200, 50, 20);
  car.velocityX = speed;
  car.shapeColor = ("white");
}

function draw() {
  background("gray");  
  
  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22500
   
   if(deformation>180) {
    car.shapeColor = color("blue");
   }

   if(deformation<180 && deformation>100) {
    car.shapeColor = color("red");
   }

   if(deformation<100) {
    car.shapeColor = color("green");
   }
  }

  drawSprites();
}