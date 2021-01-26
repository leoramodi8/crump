class Paper {
    constructor(x, y, radius) {
        var options = {
           isStatic: false,
           restitution :0.3,
           friction : 2,
           density :9,

        }
        this.body = Matter.Bodies.circle(x, y, radius/2, options);
       this.radius = radius;      
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
      }
}