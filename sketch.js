const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,maxdrops=100
var drops=[]
var t,t1,t2,t3,t4,r,tcf=0
function preload(){
    t1=loadImage("1.png")
    t2=loadImage("2.png")
    t3=loadImage("3.png")
    t4=loadImage("4.png")
}

function setup(){
   engine=Engine.create()
    world=engine.world
    u=new umbrella(200,300)
    
    if (frameCount%150==0){
        for (var i=0 ; i<maxdrops;i++){
        drops.push(new drop(random(0,400),random(0,400)))

        }
    }
}

function draw(){
    Engine.update(engine)
    background ("black")
    r=Math.round(random(1,4))
    if (frameCount%50==0){
        tcf=frameCount
        t=createSprite(random(10,370),random(10,30),10,10)
        switch(r){
            case 1:t.addImage(t1)
            break;
            case 2:t.addImage(t2)
            break;
            case 3:t.addImage(t3)
            break;
            case 4:t.addImage(t4)
            break;
            default:break;
        }
        t.scale=random(0.3,0.6)
    }
    if(tcf+10==frameCount&&t){
        t.destroy()
    }
    u.display()
    for(var i = 0;i<maxdrops;i++){
        drops[i].showDrop()
        drops[i].update()
    }
    drawSprites()
}   

