class Mango {
    constructor(x,y, radius) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1,
          density: 1.2
      }
      this.radius = radius;
      this.body = Bodies.rectangle(x,y,radius,options);
      World.add(world, this.body);

      this.image = loadImage('mango.png')
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      image(this.image, pos.x, pos.y, this.radius, this.radius);
    }
  };