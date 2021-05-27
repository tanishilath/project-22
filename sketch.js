var stari,bgi;
var star, starBody;
var fairy,fairyi
//create variable for fairy sprite and fairyImg
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starti = loadImage("star.png");
	bgi = loadImage("starryNight.jpg");
	fairyi = loadAnimation("fairyImage1.png","fairyImage2.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 600);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
    fairy = createSprite(400,400)
    fairy.addAnimation("fairy",fairyi);
	fairy.scale = 0.2;

	star = createSprite(650,30);
	star.addImage(starti);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgi);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  //write code to stop star in the hand of fairy
if(star.y> 470 && star.position.y > 470){
	Matter.body.setStatic(starBody,true);
}
keyPressed();
  drawSprites();

}

function keyPressed() {

    if(keyCode=== RIGHT_ARROW){
		fairy.x = fairy.x+5;
	}
	if(keyCode=== LEFT_ARROW){
		fairy.x =fairy.x- 5;
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
