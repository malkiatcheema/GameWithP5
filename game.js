
var gameState = "START";
var buttonX = 200;
var buttonY = 200;
var distanceToButton = 0.0;
var score = 0;
var frameCount=0;

function setup() {
  createCanvas(600, 600);
 
	textAlign(CENTER);
	
	
} 
function draw() {
  background(220);
  
	
	if(gameState == "START"){
		start();
		frameCount=0;
	}
	
	if(gameState == "GAMEON"){
		gameOn();
	
	}
	
	if(gameState == "GAMEOVER"){
		gameOver();
	}

} 
function start(){
	text("SCORE: " + score,width/2,20);
	text("Time sec: " + frameCount, width/2,40);
	text("GameState: " + gameState, width/2,60);
	
	text("Click To Play", width/2,height/2);
	if(mouseIsPressed){
		gameState = "GAMEON";
	}
} 

function gameOn(){
	background(250,0,0);
  distanceToButton = dist(buttonX,buttonY,mouseX,mouseY);

	text("SCORE: " + score,width/2,20);
	text("Time Sec: " + frameCount, width/2,40);
	text("GameState: " + gameState, width/2,60);

	ellipse(buttonX,buttonY,50,50);	
		
	if(distanceToButton <25){  
		buttonX = random(width);
		buttonY = random(height);
		score += 1;
	}
	
	if(frameCount>=1000){  
		gameState = "GAMEOVER";
	}
} 

function gameOver(){
	background(128);
	text("SCORE: " + score,width/2,20);
	
	text("GAME OVER", width/2,100);
	text("Click to Play Again!", width/2,200);
	if(mouseIsPressed){
		gameState = "START";
		 text("Time Sec: " + frameCount, width/2,40);
		
	}
} 


