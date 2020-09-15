
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100,100,20);
	
	ground = new Ground(400, 700, 900, 50);
  
}


function draw() {
	
Engine.update(engine);
  rectMode(CENTER);
  background(0);
paper.display();
ground.display();

  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW)

	Body.applyForce(paper.body, paper.body.position, {x: 85, y:-85})
}

