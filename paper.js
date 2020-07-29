  class Paper  {
    constructor(x,y,radius)   {
        var options = {
            isStatic: false,
            restitution: 0.3,
            density: 1.2,
            friction: 1.0,
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);
        this.radius = radius;
    }

        display()   {
            push();
            var pos = this.body.position;
           
            fill(242,8,218);
            stroke(255);
            strokeWeight(4);
            ellipseMode(RADIUS);
            ellipse(pos.x,pos.y,this.radius,this.radius);
            pop();
        }

}
