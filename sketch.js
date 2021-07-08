
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var tree;
var mango;

function preload()
{
	
}

function setup() {
	createCanvas(1366, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(800, 590, 1600, 10);

	tree = new Tree(800, 200, 400, 400);
	mango = new Mango(780, 100, 600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  drawSprites();

  ground.display();
  tree.display();
  mango.display();

}



