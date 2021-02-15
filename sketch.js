var car;
var wall;
var speed;
var weight;
var deformation;
function setup() 
{
createCanvas(800,400);
car=createSprite(100,100,10,10)
wall=createSprite(700,100,10,100)
speed=Math.round(random(5,15))
weight=Math.round(random(100,200))
car.velocityX=7;
}

function draw()
{
  background("black");
  if(wall.x-car.x<=(car.width+wall.width)/2)
  {
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    if (deformation<=100)
  {
    car.shapeColor="green";
  }
  if(deformation<=100 && deformation>=180)
  {
    car.shapeColor="yellow";
  }
  if(deformation>180)
  {
    car.shapeColor="red";
  }
  }  
  drawSprites();
}