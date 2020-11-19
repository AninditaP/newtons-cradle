
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

function setup() {
	createCanvas(1200, 900);

	engine = Engine.create();
	world = engine.world;

	roof= new Roof(600,100,700,100);
	bob1= new Ball(400,700,100);
	bob2= new Ball(500,700,100);
	bob3= new Ball(600,700,100);
	bob4= new Ball(700,700,100);
	bob5= new Ball(800,700,100);
	rope1= new Rope(bob2.body,roof.body,-100,0);
	rope2= new Rope(bob1.body,roof.body,-200,0);
	rope3= new Rope(bob3.body,roof.body,0,0);
	rope4= new Rope(bob4.body,roof.body,100,0);
	rope5= new Rope(bob5.body,roof.body,200,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  bob2.display();
  bob1.display();
  bob3.display();
  bob4.display();
  bob5.display();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-85,y:105});
	}
}



