var sea,ship;
var seaImg,shipImg;

function preload(){
seaImg = loadImage("sea.png","sea.png")
shipImg1=loadAnimation("sea.png")
shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png")
}
function setup(){
createCanvas(400,400)
background("blue")
sea=createSprite(400,200)
sea.addImage(seaImg)
sea.scale=0.3
ship = createSprite(130,200,30,30)
ship.addAnimation("movingShip",shipImg1)
ship.scale =0.25
}
function draw() {
background("blue");
if(sea.x<0){
 sea=createSprite(400,200)
 sea.addImage(seaImg)
 sea.scale=0.3

 ship = createSprite(130,200,30,30)
 ship.addAnimation("movingShip",shipImg1)
 ship.scale =0.25
 }
sea.velocityX = -3;
drawSprites();
}