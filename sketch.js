const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg = "snow1.jpg";
var girl, girlImg;
var snow;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  backgroundImg = loadImage (bg);

  girl = createSprite(400, 200, 50, 50);
 // girlImg = loadAnimation("Girl1.gif");
 // girl.addAnimation("girl1",girlImg);
 // girl.scale = 0.3;

 
  
}

function draw() {
  background(backgroundImg);
  Engine.update(engine); 

  snow = new Snow(400,50,50);
  snow.display();
  //console.log(snow);

  //drawSprites();


}


//Replace the character Images
//shift image loading to preload
