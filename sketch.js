var fixedRect, movingRect;
var b1,b2,b3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  b1=createSprite(100,100,50,50);
  b2=createSprite(200,100,50,50);
  b3=createSprite(300,100,50,50);
  b1.shapeColor="yellow";
  b2.shapeColor="yellow";
  b3.shapeColor="yellow";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(istouching(movingRect,fixedRect)) {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
  
 }
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  
}
if(istouching(movingRect,b1)) {
  movingRect.shapeColor = "blue";
  b1.shapeColor = "blue";
  
 }
else{
  movingRect.shapeColor = "green";
  b1.shapeColor="yellow";
}
if(istouching(movingRect,b2)) {
  movingRect.shapeColor = "blue";
  b2.shapeColor = "blue";
  
 }
else{
  movingRect.shapeColor = "green";
  b2.shapeColor="yellow";
}
if(istouching(movingRect,b3)) {
  movingRect.shapeColor = "blue";
  b3.shapeColor = "blue";
  
 }
else{
  movingRect.shapeColor = "green";
  b3.shapeColor="yellow";
}
  drawSprites();
}



