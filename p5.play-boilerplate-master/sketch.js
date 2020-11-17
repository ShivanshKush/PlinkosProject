const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var plinkos,divisions,particles;

var plinkos = [];
var particles = [];
var divisions = [];

var DivisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

    ground = new Ground(240,780,1200,20);

    for (var k = 0; k <= innerWidth; k = k+80 ){
      divisions.push(new Division(k,height - DivisionHeight/2,10,DivisionHeight));
  }
  for (var j =40;j<= width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for (var j =15;j<= width-10 ; j=j+50){
   plinkos.push(new Plinko(j,175));
 }
    
}

function draw() {
  background(0); 
   ground.display();
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for (var p =40;p <=width; p=p+50){
    plinkos[p].display();
  }
  for (var q =15;q <=width-10 ; q=q+50){
   plinkos[q].display();
 }

  drawSprites();
}

