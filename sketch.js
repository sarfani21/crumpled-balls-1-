
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var groundObject;
var dustbinleft, dustbinright, dustbinbottom; 
var paperobject;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject = new ground(800,670,width,20);
	dustbinleft = new dustbin(1100, 620, 20, 80);
	dustbinright = new dustbin(1200, 620, 20,80);
	dustbinbottom = new dustbin(1150, 650, 80,20);
	paperobject=new paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObject.display();
  dustbinleft.display();
  dustbinright.display();
  dustbinbottom.display();
  paperobject.display();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});
	}
}



