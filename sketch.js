
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0 ;
var ground;
var survivalTime = 0 ;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  //setting the ground sprite 
  ground = createSprite(200,380,800,10);
  ground.velocityX = -4;
  
  //setting the monkeysprite
  monkey = createSprite(50,350,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = .1;
  
  //creating groups.
  FoodGroup = new Group();
  obstacleGroup = new Group();

  
}


function draw() {
  background("white");
  //displaying score and survivaltime
  stroke("white");
  textSize(20);
  fill("Grey");
  text("Score: "+ score,280,20);
  stroke("black");
  fill("black");
  score = score + Math.round(frameRate()/30);
  text("Survival time: "+   survivalTime,100,50);
  survivalTime =   Math.ceil(frameCount/frameRate());
  //moving the ground and making it look endless
  if(ground.x < 0 )
  {
    ground.x = ground.width/2;
  }
  //monkey jumps when spacebar is pressed.
  if(keyDown("space"))
  {
    monkey.velocityY = -10;
  }
  //gravity for the monkey.
  monkey.velocityY = monkey.velocityY + 1;
  //spawning bananas and obstacles.
  spawnBananas();
  spawnObstacles();
  monkey.collide(ground);
  drawSprites();
}
function spawnBananas()
{
  //spawn bananas every 80 frames.
  if(frameCount % 80 == 0 )
  {
    //the banana's vertical position is randmonly generated.
    banana = createSprite(350,Math.round(random(120,200)),10,20);
    banana.addImage("bananaI",bananaImage);
    banana.scale = .1;
    banana.velocityX = - 6;
    banana.lifetime = 67;
    FoodGroup.add(banana);
  }
 
}
function spawnObstacles()
{
  //spawn obstacles every 300 frames
  if(frameCount % 300 == 0 )
  {
    obstacle = createSprite(380,350,10,10);
    obstacle.velocityX = - 4;
    obstacle.lifetime =  88;
    obstacle.addImage("stone",obstaceImage);
    obstacle.scale = .1;
    obstacleGroup.add(obstacle);
  }
}




