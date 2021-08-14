
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftSide,rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800,600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball=Bodies.circle(200,350,10,ball_options);
    World.add(world, ball);

	groundObj=new Ground(width/2,670,width,20);
	leftSide=new Dustbin(1100,600,20,120);
	rightSide=new Dustbin (1500,600,20,120);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	Engine.run(engine);
  
}


function draw() {
  
  background("yellow");

  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();
Engine.update(engine)
drawSprites();
 
}

function key_Pressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:15,y:-15})

   }
}

