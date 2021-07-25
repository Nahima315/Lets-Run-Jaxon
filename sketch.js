
function preload(){
  //pre-load images
  bomb.addImage(bombImg);
  coin.addImage(coinImg);
  energyDrink.addImage(energydrinkImg);
  path.addImage(pathImg);
  power.addImage(powerImg);
  runner1.addImage(runner1Img);
  runner2.addImage(runner2Img);

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  bomb=createSprite;
  coin=createSprite;
energyDrink=createSprite;
power=createSprite;
boy=createSprite;

}

function draw() {
  background(0);
 path=createSprite(200,200);
 path.addImage(pathImg);
 path.VelocityY = 4;
 path.scale=1.2;
 
  if(path.y>400){
    path.y=height/2;
  }

}
