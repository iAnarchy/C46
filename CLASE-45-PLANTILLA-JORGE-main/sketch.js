const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;
var SRToy;
var Saiune;
var SRToyskin
var Saiuneskin
var heartImage,halfaheartImage,defenceImage,halfdefenceImage,noHeartImage,noDefenceImage,criticalImage,StrenghtImage
var heartp1, heartp2,defencep1,defencep2,criticalp1,criticalp2,strenghtp1,strenghtp2

function preload(){
  SRToyskin = loadImage("body-1.png");
  Saiuneskin = loadImage("body.png");
  heartImage = loadImage("heart.png");
  halfaheartImage = loadImage("halfaheart.png");
  defenceImage = loadImage("defence.png");
  halfdefenceImage = loadImage("halfdefence.png");
  noHeartImage = loadImage("noheart.png");
  noDefenceImage = loadImage("nodefence.png");
  criticalImage = loadImage("critical.png");
  StrenghtImage = loadImage("strenght.png");
}

function setup() {
  createCanvas(1500,700);
  
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,40);
  SRToy = new Players(100,200,100,100,SRToyskin);
  Saiune = new Players(1000,200,100,100,Saiuneskin);
  heartp1 = new abilities(100,100,200,heartImage,"red");
  heartp2 = new abilities(1000,100,200,heartImage,"red");
  defencep1 = new abilities(100,150,200,defenceImage,"green");
  defencep2 = new abilities(1000,150,200,defenceImage,"green");
  criticalp1 = new abilities(100,200,200,criticalImage,"blue");
  criticalp2 = new abilities(1000,200,200,criticalImage,"blue");
  strenghtp1 = new abilities(100,250,200,StrenghtImage,"red");
  strenghtp2 = new abilities(1000,250,200,StrenghtImage,"red");
}

function draw() {
  background(240);
  Engine.update(engine);
  ground.display();
  SRToy.display();
  Saiune.display();
  heartp1.display();
  heartp2.display();
  defencep1.display();
  defencep2.display();
  criticalp1.display();
  criticalp2.display();
  strenghtp1.display();
  strenghtp2.display();
  movementP1();
  drawSprites();
}

function movementP1(){
if(keyDown("W")){
SRToy.movementUp();  
}
}

