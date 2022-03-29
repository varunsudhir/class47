var bg,bgImg
var ss,ss1
var alien,a1,a2,a3,a4,a5,a6,a7
var alienGroup,laserGroup
var laser
var score=0
var gameState="play"
function preload(){
  bgImg=loadImage("assets/bg4.jpg")
  ss1=loadImage("assets/ss1.png")
  a1=loadImage("assets/a1.png")
  a2=loadImage("assets/a2.png")
  a3=loadImage("assets/a3.png")
  a4=loadImage("assets/a4.png")
  a5=loadImage("assets/a5.png")
  a6=loadImage("assets/a6.png")
  a7=loadImage("assets/a7.png")
  
}

function setup(){
  createCanvas(1400,600)
 //bg=createSprite(0,0,1400,600)
 //bg.addImage(bgImg)
 //bg.scale=3.7
ss=createSprite(100,350)
ss.addImage(ss1)
ss.scale=0.5
alienGroup=new Group()
laserGroup=new Group()

}

function draw() {
  background(bgImg);
  
  drawSprites();
  textSize(30)
  fill(0)
  text("SCORE="+score,200,50)
  if(gameState==="play"){
    if(keyDown(UP_ARROW)){
   ss.y-=5  
    
    }
    if(keyDown(DOWN_ARROW)){
      ss.y+=5  
       
       }
       if(ss.y<100){
            ss.y=100
       }
       if(ss.y>500){
            ss.y=500
       }
       if(keyDown("space")){
          releaselaser()

       }
       spawnAliens()
  }
  if(gameState==="end"){

  }

}
function spawnAliens(){
  if(frameCount%150===0){
      var rand=Math.round(random(100,500))
      alien=createSprite(1400,rand,50,50)
      alien.velocityX=-4
      var randImg=Math.round(random(1,7))
      switch(randImg){
        case 1: 
        alien.addImage(a1)
        alien.scale=0.2
        break 
        case 2: 
        alien.addImage(a2)
        alien.scale=0.2
        break  
        case 3: 
        alien.addImage(a3)
        alien.scale=0.4
        break 
        case 4: 
        alien.addImage(a4)
        alien.scale=0.4
        break 
        case 5: 
        alien.addImage(a5)
        alien.scale=0.4
        break 
        case 6: 
        alien.addImage(a6)
        alien.scale=0.4
        break 
        case 7: 
        alien.addImage(a7)
        alien.scale=0.4
        break 
         
      }
      alien.lifetime=1400/4
      alienGroup.add(alien)
      
  }
}
    function releaselaser(){
      laser=createSprite(200,200,60,5)
      laser.y=ss.y
      laser.shapeColor="lime"
      laser.velocityX=10
      laser.lifetime=140
      laserGroup.add(laser)
    }
   