const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine, world
var ground, ball





function setup() {
  var canvas= createCanvas(400,400);
engine=Engine.create()
world=engine.world
var ground_options={
isStatic:true
}
ground=Bodies.rectangle(0,390,400,20,ground_options);
World.add(world,ground);
var ball_options={
 restitution:0.5
  }
  ball=Bodies.circle(200,100,40,ball_options);
  World.add(world,ball);
}






function draw() {
  background("lightgreen");  
  Engine.update(engine);
  rect(ground.position.x, ground.position.y,400,40)
  ellipse(ball.position.x, ball.position.y, 30,30)
}