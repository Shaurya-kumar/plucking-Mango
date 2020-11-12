
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var mango1,mango2,mango3,mango4,mango5;
var tree;
var ground;
var boy;
var slingshot;
var stone;
function preload()
{
  
  boyImg = loadImage("boy.png");

}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	tree = new Tree(1550,400,1,1);
mango1 = new Mango(750,300,100,100);
mango2 = new Mango(770,430,100,100);
mango3 = new Mango(600,280,100,100);
mango4 = new Mango(880,440,100,100);
mango5 = new Mango(650,390,100,100);
ground = new Ground(500,795,1000,10);
boy = createSprite(200,740,100,50);
boy.addImage(boyImg);
boy.scale = 0.1;
stone  = new Stone(150,680,50,50);
slingshot = new Slingshot(stone.body,{x:150,y:680}); 


}


function draw() {
  rectMode(CENTER);
  background("pink");

  tree.display();      
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  slingshot.display();

  drawSprites();
 
}

function mouseDragged(){

Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  slingshot.fly();

}
