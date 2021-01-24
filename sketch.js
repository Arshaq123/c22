

//namespacing
const Engine = Matter.Engine;
const World = Matter.World ;
const Bodies = Matter.Bodies; 


var engine,world,ball;
var garden;

function setup() {
  createCanvas(800,400);

  //engine for our game
  engine = Engine.create();//this is the physics engine for our game

  world = engine.world;// creating a world using the engine , why do we need - so that we have all the physics applied to our world


  
    var garden_options= {

        isStatic : true
    }
    garden=Bodies.rectangle(400,200,800,20, garden_options);
    World.add(world,garden);


  var ball_options = {

     
      restitution:0.100 // restitution means how much a body can bounce - bounciness, value is btw 0-1

  }

  ball = Bodies.circle(200,100,20,ball_options);//creating objects that will live in our world and follow physics rules
  World.add(world,ball);//adding the object to our world

  console.log(ball);
  console.log(ball.position.x);





 // createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  

  Engine.update(engine);


  rectMode(CENTER)
  rect(garden.position.x,garden.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

 

  //drawSprites();
}

//library  -matter.js
//p5 library

//engine, world, bodies
//engine - Physics engine - our engine to create a game world which has all physics applied
//world - creating a world which follows the physics engine
//bodies = these are the objects that live in the world