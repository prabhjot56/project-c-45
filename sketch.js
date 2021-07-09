var crossBow ,dartboard, player,bg
var bgImg,crossBowImg,dartBoardImg,playerImg,hangingboardImg;
var PLAY=1;
var END=0
var gameState=PLAY;
var score=0;
var restart,gameOver;

function preload(){
  bgImg=loadImage("bg.jpg");
  crossBowImg=loadImage("gun.jpg");
dartBoardImg=loadImage("dart board.PNG");
hangingboardImg=loadImage("hangingboards.PNG");
playerImg=loadImage("images.jpg");
restartIMG=loadImage("restart.jpg");
gameOverIMG=loadImage("gmover.jpg");
}
function setup() {
  createCanvas(1600,800);
 bg= createSprite(600, 250, 200, 100);
 bg.addImage(bgImg);
 bg.scale=2.5;
 dartboard=createSprite(550,250,50,50);
 dartboard.addImage(dartBoardImg);
 dartboard.scale=0.2;

 player=createSprite(200,300,20,20);
 player.addImage(playerImg);
 player.scale=0.5;

 crossBow=createSprite(200,300,5,5);
 crossBow.addImage(crossBowImg);
 crossBow.scale=0.1;

 

 restart=createSprite(600,200);
 restart.addImage(restartIMG);
 restart.scale=0.2;



 gameOver=createSprite(800,200);
 gameOver.scale=0.2;
 gameOver.addImage(gameOverIMG);

hangingboard=createSprite(100,300,5,5);
hangingboard.addImage("hangingboardImg");






}

function draw() {
  background(0);  

  if(gameState===PLAY){
   if(keyDown("SPACE")){
    crossBow.x=mouseX;
    crossBow.y=mouseY;

   }

   if(crossBow.isTouching(dartboard)){
     score=score+5;
     
     
   }
  }
 // else(gameState===END){

 // }

  

  
  drawSprites();
   text("score:"+ score,100,50);
}