
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box, box2, box3
var boxS1,boxS2,boxS3

function preload()
{
	
}






function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
    world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	


	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

   box=Bodies.rectangle(790,585,35,150, {isStatic: true});
	boxS1=createSprite(790,585,35,150)
   
   box2=Bodies.rectangle(980,585,35,150,  {isStatic: true});
   boxS2=createSprite(980,585,35,150)
   box3=Bodies.rectangle(900,643,189,35,  {isStatic: true});
   boxS3=createSprite(900,643,189,35)
	
   paper= new Paper(200,200,20);
	
	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keypressed() {
	if(keyCode === UP_ARROW){

		 Matter.Body.applyforce(paperObject,paperObject.body.position,{x:85, y:85});
	}
}

