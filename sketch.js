
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var tree,tree_img;
var boy,boy_img;
var sun,sun_img;
var mango1,mango2,mango3,mango4,mango5,mango6;
var stone;
var sling;
function preload()
{
	tree_img = loadImage("tree.png");
	boy_img = loadImage("boyx.png");
	sun_img = loadImage("sun.jpg");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,680,100,1000);
	tree = createSprite(730,420,5,5);
	tree.addImage(tree_img);
    tree.scale=0.4;
    sun = createSprite(75,70,5,5);
	sun.addImage(sun_img);
	sun.scale=0.16;
	boy = createSprite(200,567,5,5);
	boy.addImage(boy_img);
    boy.scale=0.16;
	
	mango1 = new Mango(800,300);
	mango2 = new Mango(750,260);
	mango3 = new Mango(700,350);
	mango4 = new Mango(660,250);
	mango5 = new Mango(600,330);
	mango6 = new Mango(850,355);

	stone = new Stone(165,545);
	 
	sling = new Slingshot(stone.body,{x:165, y:545});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  ground.display();
  tree.display();
  sun.display();
  boy.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display(); 

  stone.display();
  sling.display();

  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);
  detectCollision(mango6,stone);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}
function mouseReleased(){
sling.fly();

}
function detectCollision(mango,stone){
mangoBodyPostion=mango.body.position;
stoneBodyPosition=stone.body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPostion.x,mangoBodyPostion.y);
if (distance<=mango.r+stone.r){
	Matter.Body.setStatic(mango.body,false);
}
}