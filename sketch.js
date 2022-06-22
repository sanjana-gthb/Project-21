var ball;
var ground;
var radius=40;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);
	
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	
 
  rectMode(CENTER);
  ellipseMode(RADIUS);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(260,100,radius/2,ball_options);
	ground=new Ground(width/2,470,width,20);
	leftSide=new Ground(310,400,20,120);
    rightSide=new Ground(395,400,20,120);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
	ellipse(ball.position.x,ball.position.y,20)
	ground.display();
	leftSide.display();
	rightSide.display();
	Engine.update(engine);
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})
	}
}
