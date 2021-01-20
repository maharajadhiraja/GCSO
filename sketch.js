var car,wall;
var speed,weight;
//var status;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  //status=createSprite(850, 100, 30, 30);
  wall = createSprite(1500,200,60,height/2);
  speed = Math.round(random(55,90));
  weight = Math.round(random(400,1500));
  car.velocityX = speed;
}

function draw() {
  background("black");
  
  //Text("Status:",status.x-50,status.y);

if(wall.x-car.x < car.width/2 + wall.width/2){

car.velocityX = 0;
var deform = 0.5 * weight * speed * speed / 22500;

if(deform<100){

  car.shapeColor = "green";
  //status.shapeColor = "green";


}
if(deform>100 && deform<180){

  car.shapeColor = "yellow";
  //status.shapeColor = "yellow";

}
if(deform>180){

  car.shapeColor = "red";
  //status.shapeColor = "red";

}



}  






























  drawSprites();
}