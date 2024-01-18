var cueBall,poolBall1,poolBall2,poolBall3,poolBall4,poolBall5,poolBall6,poolBall7,poolBall8,poolBall9,poolBall10,poolBall11,poolBall12,poolBall13,poolBall14,poolBall15, cueStick
var table
var edgesGroup
var TableEdge1, TableEdge2, TableEdge3, TableEdge4

function preload(){
 cueBall = loadImage("CueBall.png")
 poolBall1 = loadImage("PoolBall 1.png")
 poolBall2 = loadImage("PoolBall 2.png")
 poolBall3 = loadImage("PoolBall 3.png")
 poolBall4 = loadImage("PoolBall 4.png")
 poolBall5 = loadImage("PoolBall 5.png")
 poolBall6 = loadImage("PoolBall 6.png")
 poolBall7 = loadImage("PoolBall 7.png")
 poolBall8 = loadImage("PoolBall 8.png")
 poolBall9 = loadImage("PoolBall 9.png")
 poolBall10 = loadImage("PoolBall 10.png")
 poolBall11 = loadImage("PoolBall 11.png")
 poolBall12 = loadImage("PoolBall 12.png")
 poolBall13 = loadImage("PoolBall 13.png")
 poolBall14 = loadImage("PoolBall 14.png")
 poolBall15 = loadImage("PoolBall 15.png")
 cueStick = loadImage("Cue Stick 2.png")
 table = loadImage("Pool Table.png")
  
}


function setup() {
createCanvas(1400,900)
  Table = createSprite(480,365,40,40)
  CueStick= createSprite(470,630,20,20)
  CueBall = createSprite(470,530,20,20)
  PoolBall1= createSprite(420,210,18,18)
  PoolBall2 = createSprite(440,210,18,18)
  PoolBall3 = createSprite(460, 210, 18, 18)
  PoolBall4 = createSprite(488, 230, 18, 18);
  PoolBall5 = createSprite(508, 230, 18, 18);
  PoolBall6 = createSprite(530, 230, 18, 18);
  PoolBall7 = createSprite(560, 250, 18, 18);
  PoolBall8 = createSprite(585, 250, 18, 18);
  PoolBall9 = createSprite(523, 250, 18, 18);
  PoolBall10 = createSprite(503, 250, 18, 18);
  PoolBall11 = createSprite(483, 270, 18, 18);
  PoolBall12 = createSprite(463, 270, 18, 18);
  PoolBall13 = createSprite(443, 270, 18, 18);
  PoolBall14 = createSprite(423, 270, 18, 18);
  PoolBall15 = createSprite(403, 270, 18, 18);
  TableEdge1 = createSprite(326,365,6,200)
  TableEdge2 = createSprite(480,120,325,12)
  TableEdge3 = createSprite(635,365,13,479)
  TableEdge4 = createSprite(480,610,325,12)
  

  CueBall.addImage("CueBall",cueBall)
  PoolBall1.addImage("PoolBall1",poolBall1)
  PoolBall2.addImage("PoolBall2",poolBall2)
  PoolBall3.addImage("PoolBall3",poolBall3)
  PoolBall4.addImage("PoolBall4",poolBall4)
  PoolBall5.addImage("PoolBall5",poolBall5)
  PoolBall6.addImage("PoolBall6",poolBall6)
  PoolBall7.addImage("PoolBall7",poolBall7)
  PoolBall8.addImage("PoolBall8",poolBall8)
  PoolBall9.addImage("PoolBall9",poolBall9)
  PoolBall10.addImage("PoolBall10",poolBall10)
  PoolBall11.addImage("PoolBall11",poolBall11)
  PoolBall12.addImage("PoolBall12",poolBall12)
  PoolBall13.addImage("PoolBall13",poolBall13)
  PoolBall14.addImage("PoolBall14",poolBall14)
  PoolBall15.addImage("PoolBall15",poolBall15)
  CueStick.addImage("CueStick",cueStick)
  Table.addImage("Table",table)

  CueBall.scale=0.16
  PoolBall1.scale=0.18
  PoolBall2.scale=0.16
  PoolBall3.scale=0.16
  PoolBall4.scale=0.16
  PoolBall5.scale=0.16
  PoolBall6.scale=0.16
  PoolBall7.scale=0.16
  PoolBall8.scale=0.16
  PoolBall9.scale=0.16
  PoolBall10.scale=0.16
  PoolBall11.scale=0.16
  PoolBall12.scale=0.16
  PoolBall13.scale=0.16
  PoolBall14.scale=0.16
  PoolBall15.scale=0.16
  CueStick.scale=0.72
  Table.scale = 2.4
  TableEdge1.scale = 2.4
  
 edgesGroup = createGroup(TableEdge1, TableEdge2, TableEdge3, TableEdge4)
  


}

function draw() {
  background("green");  
  drawSprites();
  
}

function keyPressed(){
if(keyIsDown("space")){
  CueStick.y = CueStick.y + 12

  
}

if (CueStick.isTouching(CueBall)){
  CueBall.y = CueBall.y + 40
}

if(PoolBall12.isTouching(CueBall)){
PoolBall1 .velocityX = 0.03
PoolBall1.velocityY = 0.03

}

if(PoolBall1.collides()){
  PoolBall1.velocityX = 0
  PoolBall1.velocityY = 0
}
}