class Dustbin {
    constructor(x,y,width,height) {
    var options = {
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    this.image = loadImage("dustbin.png");

}
display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    //push();
   // translate(pos.x,pos.y);
    //rotate(angle);
    rectMode(CENTER);
    strokeWeight(5);
    stroke("yellow");
    fill("red");
   rect(pos.x,pos.y,this.width,this.height);
    image(this.image,620,600,150,100);
    //pop();
}
}