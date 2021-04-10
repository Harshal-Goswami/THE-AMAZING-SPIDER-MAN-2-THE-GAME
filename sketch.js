var SPIDERMAN , SPIDERMANImg;
var ELECTRO , ELECTROImg;

function preload()
{
	SPIDERMANImg = loadImage ("SPIDER-MAN.png");
	ELECTROImg = loadImage ("ELECTRO.png")
}

function setup() {
	createCanvas(800, 700);
	SPIDERMAN == createSprite(100 , 130 , 50 , 50);
	SPIDERMAN.addImage(SPIDERMANImg);
    SPIDERMAN.scale = 0.1;

	ELECTRO == createSprite(100 , 130 , 50 , 50);
	ELECTRO.addImage(ELECTROImg);
  ELECTRO.velocityX = 2;
  ELECTRO.scale = 0.1;    
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(keyDown(RIGHT_ARROW)){
    SPIDERMAN.velocityX = 2;
  }
  if(keyDown(LEFT_ARROW)){
    SPIDERMAN.velocityX = -2;
  }
  if(keyDown(UP_ARROW)){
    SPIDERMAN.velocityX = -2;
  }
  if(keyDown(DOWN_ARROW)){
    SPIDERMAN.velocityX = 2;
  }	
    if(ELECTRO.isTouching("SPIDERMAN")){
      textSize(17,14);
      text("GAME OVER" , 200 , 200);
    }
  drawSprites();
 
}



