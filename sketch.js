
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,200,30);
	mango3=new mango(1000,100,30);
	mango4=new mango(1000,200,30);
	mango5=new mango(1130,150,30);

    stoneObj=new stone(230,410,30)
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	launcherObject=new launcher(stoneObj.body,{x:230,y:410})
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stoneObj.display()
  groundObject.display();

  launcherObject.display()

  detectollision(stoneObj,mango1)
  detectollision(stoneObj,mango2)
  detectollision(stoneObj,mango3)
  detectollision(stoneObj,mango4)
  detectollision(stoneObj,mango5)
}


function detectollision(lstone,lmango)
{
	var mangoBodyPosition=lmango.body.Position
    var stoneBodyPosition=lstone.body.Position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false);
	}

}
function mouseDragged()
{
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
    launcherObject.fly();
}

function keyPressed()
{
	if(keyCode === 32)
	{
		Matter.Body.setPosition(stoneObj.body,{x:230,y:410})
		launcherObject.attach(stoneObj.body)
	}
}