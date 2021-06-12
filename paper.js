class paper {
    constructor(x, y) {
      var options = {
        'isStatic':false,
        'density':1.2,
        'friction': 0,
        'restitution':0.3,
        
      };
      this.image = loadImage("images/paper.png");
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 40;
      World.add(world, this.body);
    };
    display(){
      
      var pos = this.body.position;
      var angle = this.body.angle;
      
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('orange');
      imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      pop();
      
    };
  };
  