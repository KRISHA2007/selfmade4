class Bottle
{
  constructor(x, y, w,h) 
  {
    let options = {
        'restitution':0,
        'friction':5.0,
        'density':1.0
      };
    
    this.body = Bodies.rectangle(x, y, w, h,options);
    this.w = w;
    this.h = h;
    this.image= loadImage("./assets/bottle.png")
    World.add(world, this.body);
  }
 
  show() {
    push();
    imageMode(CENTER);
    
    image(this.image,this.body.position.x,this.body.position.y, this.w, this.h);
    pop();
  }
}