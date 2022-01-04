const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var snow;

function preload () {
  backgroundImg = loadImage("snow3.jpg");
  
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(backgroundImg);  
  
  drawSprites();
}