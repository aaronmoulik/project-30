var pacMan
var lowerwall, leftwall, upperwall;
function setup() 
{
  createCanvas(1200,470);
pacMan=createSprite(350,350,20,20)
lowerwall= createSprite(550,450,1200,40)
upperwall= createSprite(550,20,1200,40)
leftwall= createSprite(15,235,40,390)
}

function draw() 
{
background(51);
if(keyDown('right')){
  pacMan.x +=1
}

if (keyDown('left')){
  pacMan.x -=1
}

if (keyDown('up')){
  pacMan.y -=1
}

if (keyDown('down')){
  pacMan.y +=1
}


drawSprites();
}

