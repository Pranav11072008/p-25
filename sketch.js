
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground
var dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
  createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground =Bodies.rectangle(400,680,800,20,{isStatic:true})
 World.add(world,ground)
  Engine.run(engine);
  
  dustbin3 = new Dustbin(700,600,100,150);
  paper = new Paper(50,600,70)

  
}


function draw() {
  rectMode(CENTER);
  background("white")
  
 dustbin3.display()
rect(ground.position.x,ground.position.y,800,20)
 paper.display()
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:0.7,y:-0.7})
   }
 }


