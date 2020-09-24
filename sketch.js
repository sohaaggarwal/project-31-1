
const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var particles=[];
var plinkos= [];
var divisions=[];
var divisionHeight=300;
var engine,world;

function setup() {
  createCanvas(800,480);
  engine=Engine.create();
  world=engine.world
  Engine.run(engine);
  Ground=new ground(200,100,300,height);
  Division=new division(300,150,350,40);
  
}

function draw() {
  background(255,255,255);  
  Ground.display();
  drawSprites();
  for(var k=0; k<=width; k = k+80){
    divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
  }
}
