class Plinko {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius=radius;
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    
    for(var j=40;j <= width; j=j+50)
    {
        plinko.push(new Plinko(j,75));
    }
    for(var k=15; k<=width-10;k=k+50)
{
    plinko.push(new Plinko(k,175));
}

  }
}
