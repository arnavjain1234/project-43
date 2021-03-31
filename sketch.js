var hr,hrAngle
var mn,mnAngle
var sc, scAngle
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);  
  translate(200,200)
  rotate(-90)
  hr=hour()
    mn=minute()
     sc=second() 
    ml=millis()
  scAngle=map(sc,0,60,0,360)
  mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr%12,0,12,0,360)
  mlAngle=map(ml,0,1000,0,360)
  push()
rotate(scAngle)
strokeWeight(7)
stroke("green")
line(0,0,100,0)
    pop()

    push()
    rotate(mnAngle)
    strokeWeight(9)
    stroke("yellow")
    line(0,0,75,0)
        pop()

        push()
        rotate(hrAngle)
        strokeWeight(10)
        stroke("red")
        line(0,0,50,0)
            pop()

            push()
            rotate(mlAngle)
            strokeWeight(6)
            stroke("pink")
            line(0,0,50,0)
                pop()

            noFill()
            stroke("green")
            strokeWeight(7)
            arc(0,0,260,260,0,scAngle)
  
            noFill()
            stroke("yellow")
            strokeWeight(8)
            arc(0,0,280,280,0,mnAngle)
  
            noFill()
            stroke("red")
            strokeWeight(9)
            arc(0,0,300,300,0,hrAngle)
  
            noFill()
            stroke("pink")
            strokeWeight(6)
            arc(0,0,240,240,0,mlAngle)
  drawSprites();
}