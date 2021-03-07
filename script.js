var y=150;
var by=200;
var bx=200;
var xspeed=2;
var yspeed=2;
function setup(){
  createCanvas(400,400); 
}
function draw(){
  background('black');
  fill('white')
  rect(10,y,25,100);
  rect(365,by-50,25,100);
  fill('blue');
  ellipse(bx,by,25,25);
  bx=bx+xspeed;
  by=by+yspeed
  if(bx<45 && by<=y+100 && by>=y){
    yspeed=yspeed*+1;
    xspeed=xspeed*-1;
  }else if(by>=385 || by<15){
    yspeed=yspeed*-1;
  }
  if(bx>=355 || bx<0){
    xspeed=xspeed*-1;
  }
}
function keyPressed(){
  if(keyCode==UP_ARROW){
    y=y-25;
  }else if(keyCode==DOWN_ARROW){
    y=y+25;
  }
}
