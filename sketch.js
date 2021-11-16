const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world;
var ground;
var ground2;
var ball;
function setup() {
  createCanvas(400,400);
 engine=Engine.create()
world=engine.world
var groundOption={
  isStatic:true
}
ground=Bodies.rectangle(200,100,100,10,groundOption);
World.add(world,ground) 
console.log(ground)

ground2=Bodies.rectangle(100,200,100,10,groundOption);
World.add(world,ground2)

var ballOption={
  restitution:1.2
}
ball=Bodies.circle(210,50,10,ballOption);
World.add(world,ball)
}

function draw() {
  background(5,25,100);  
  Engine.update(engine)
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,150,50)
fill("red")
 rect(ground2.position.x,ground2.position.y,200,50)

 ellipse(ball.position.x,ball.position.y,50,50)
}