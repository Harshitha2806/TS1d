const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 




function preload()
{


}

function setup()
{

    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);

    block1 = new Block(200,300,10,5);
}

function draw()
{

Engine.update(engine);

ground.display();

block1.display();

}