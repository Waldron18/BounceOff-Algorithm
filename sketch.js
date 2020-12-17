var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving = createSprite(400, 50, 50, 50);
  moving.shapeColor="blue";
  moving.velocityY = 2;
  fixed = createSprite(400,350,50,80)
  fixed.shapeColor="green";
  fixed.velocityY = -2;

}

function draw() {
  background(10);  
  
  if(moving.x-fixed.x < moving.width/2+fixed.width/2 && fixed.x-moving.x < moving.width/2+fixed.width/2){
   moving.velocityX = -moving.velocityX;
   fixed.velocityX = -fixed.velocityX;
  } 

  if(moving.y-fixed.y < moving.height/2+fixed.height/2 && fixed.y-moving.y < moving.height/2+fixed.height/2){
    moving.velocityY = -moving.velocityY;
    fixed.velocityY = -fixed.velocityY;
  }


  drawSprites();
}