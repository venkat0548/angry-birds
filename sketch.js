const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2;
var box3;
var box4;
var box5;

var pig1;
var pig2;


var log1;
var log2;
var log3;
var log4;

function setup(){
    var canvas = createCanvas(1300,400);
    engine = Engine.create();
    world = engine.world;

    //name_of_your_object = new Classname(arguments);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810,350);

    log1 = new Log(810,260,300,PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810,220);
    log2 = new Log(810,180,300,PI/2);

    box5 = new Box(810,160,70,70);
    log3 = new Log(755,120,150,PI/7);
    log4 = new Log(880,120,150,-PI/7);
    ground =new Ground(700,390,1300,20); 



}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    ground.display();   
}




